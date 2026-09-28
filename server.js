const http = require('http'), fs = require('fs'), path = require('path');
const { WebSocketServer } = require('ws');
const E = require('./public/engine.js');
const PUB = path.join(__dirname, 'public');
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon' };

const server = http.createServer((req, res) => {
  if (req.url === '/health') return res.end('ok');
  let u = '/';
  try { u = decodeURIComponent(req.url.split('?')[0]); } catch {}
  if (u === '/') u = '/index.html';
  const f = path.normalize(path.join(PUB, u));
  if (!f.startsWith(PUB)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, b) => {
    if (e) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' });
    res.end(b);
  });
});

const wss = new WebSocketServer({ server, maxPayload: 2048 });
const rooms = new Map();
const SEATS = { 2: [0, 2], 3: [0, 1, 2], 4: [0, 1, 2, 3] };
const send = (w, o) => { if (w && w.readyState === 1) w.send(JSON.stringify(o)); };
const err = (w, m, fatal) => send(w, { t: 'err', m, fatal: !!fatal });
const rid = () => { const A = 'ABCDEFGHJKMNPQRSTUVWXYZ'; let c; do { c = Array.from({ length: 4 }, () => A[Math.random() * A.length | 0]).join(''); } while (rooms.has(c)); return c; };
const clean = (v, n) => String(v == null ? '' : v).replace(/[<>]/g, '').trim().slice(0, n);

function roomMsg(r, k) {
  return { t: 'room', code: r.code, size: r.size, started: !!r.s, host: k === 0, me: r.seats[k], seats: r.seats,
    slots: r.slots.map(x => x && { name: x.name, bot: x.bot, on: x.bot || !!x.ws }) };
}
const bcRoom = r => r.slots.forEach((x, k) => x && send(x.ws, roomMsg(r, k)));
const bcState = (r, ev, nw) => r.slots.forEach(x => x && send(x.ws, { t: 'state', s: r.s, ev, new: !!nw }));

function tick(r) {
  clearTimeout(r.tm);
  const s = r.s;
  if (!s || s.winner >= 0) return;
  const sl = r.slots[r.seats.indexOf(s.turn)];
  const auto = sl.bot || !sl.ws;
  r.tm = setTimeout(() => step(r), auto ? 1100 : (s.dice ? 20000 : 30000));
}
function step(r) {
  const s = r.s;
  if (!s || s.winner >= 0) return;
  const ev = !s.dice ? E.roll(s, 1 + (Math.random() * 6 | 0)) : E.move(s, E.ai(s));
  r.last = Date.now();
  bcState(r, ev || []);
  tick(r);
}

wss.on('connection', ws => {
  ws.alive = true; ws.ctx = null;
  ws.on('pong', () => { ws.alive = true; });
  ws.on('message', raw => {
    let m; try { m = JSON.parse(raw); } catch { return; }
    if (!m || typeof m.t !== 'string') return;
    const c = ws.ctx, r = c && c.r;
    if (m.t === 'create') {
      const size = +m.size;
      if (!SEATS[size] || rooms.size >= 500 || typeof m.token !== 'string') return err(ws, 'درخواست نامعتبر');
      const room = { code: rid(), size, seats: SEATS[size], slots: Array(size).fill(null), s: null, tm: null, last: Date.now() };
      room.slots[0] = { token: m.token.slice(0, 64), name: clean(m.name, 14) || 'بازیکن', ws, bot: false };
      rooms.set(room.code, room); ws.ctx = { r: room, k: 0 };
      return bcRoom(room);
    }
    if (m.t === 'join') {
      const room = rooms.get(clean(m.code, 4).toUpperCase());
      if (!room || typeof m.token !== 'string') return err(ws, 'اتاقی با این کد پیدا نشد', true);
      const token = m.token.slice(0, 64);
      let k = room.slots.findIndex(x => x && x.token === token);
      if (k >= 0) { const old = room.slots[k].ws; room.slots[k].ws = ws; if (old && old !== ws) { old.ctx = null; old.close(); } }
      else if (!room.s && (k = room.slots.indexOf(null)) >= 0) room.slots[k] = { token, name: clean(m.name, 14) || 'بازیکن', ws, bot: false };
      else return err(ws, 'اتاق پر است یا بازی شروع شده', true);
      ws.ctx = { r: room, k }; room.last = Date.now();
      bcRoom(room);
      if (room.s) { send(ws, { t: 'state', s: room.s, ev: [], new: false }); tick(room); }
      return;
    }
    if (!r) return;
    r.last = Date.now();
    if (m.t === 'start') {
      if (c.k !== 0 || (r.s && r.s.winner < 0)) return;
      r.slots = r.slots.map(x => x || { token: '', name: 'کامپیوتر', ws: null, bot: true });
      r.s = E.newGame(r.seats);
      bcRoom(r); bcState(r, [], true); return tick(r);
    }
    const s = r.s;
    if (!s || s.winner >= 0 || s.turn !== r.seats[c.k]) return;
    let ev = null;
    if (m.t === 'roll' && !s.dice) ev = E.roll(s, 1 + (Math.random() * 6 | 0));
    else if (m.t === 'move' && Number.isInteger(m.i)) ev = E.move(s, m.i);
    if (!ev) return err(ws, 'حرکت نامعتبر');
    bcState(r, ev); tick(r);
  });
  ws.on('close', () => {
    const c = ws.ctx;
    if (c && c.r.slots[c.k] && c.r.slots[c.k].ws === ws) { c.r.slots[c.k].ws = null; bcRoom(c.r); tick(c.r); }
  });
});

setInterval(() => wss.clients.forEach(w => { if (!w.alive) return w.terminate(); w.alive = false; w.ping(); }), 25000);
setInterval(() => rooms.forEach((r, k) => { if (Date.now() - r.last > 30 * 60e3) { clearTimeout(r.tm); r.slots.forEach(x => x && x.ws && x.ws.close()); rooms.delete(k); } }), 60000);

server.listen(process.env.PORT || 3000, '0.0.0.0', () => console.log('Mench listening'));
