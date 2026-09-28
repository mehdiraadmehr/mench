(function (root) {
  const TRACK = [[0,4],[1,4],[2,4],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0],[5,0],[6,0],[6,1],[6,2],[6,3],[6,4],[7,4],[8,4],[9,4],[10,4],[10,5],[10,6],[9,6],[8,6],[7,6],[6,6],[6,7],[6,8],[6,9],[6,10],[5,10],[4,10],[4,9],[4,8],[4,7],[4,6],[3,6],[2,6],[1,6],[0,6],[0,5]];
  const FIN = [[[1,5],[2,5],[3,5],[4,5]],[[5,1],[5,2],[5,3],[5,4]],[[9,5],[8,5],[7,5],[6,5]],[[5,9],[5,8],[5,7],[5,6]]];
  const HOME = [[[1,1],[2,1],[1,2],[2,2]],[[8,1],[9,1],[8,2],[9,2]],[[8,8],[9,8],[8,9],[9,9]],[[1,8],[2,8],[1,9],[2,9]]];
  const abs = (p, r) => (p * 10 + r) % 40;
  const cell = (p, r, i) => r < 0 ? HOME[p][i] : r < 40 ? TRACK[abs(p, r)] : FIN[p][r - 40];
  function newGame(seats) {
    return { seats, pos: [0,1,2,3].map(() => [-1,-1,-1,-1]), turn: seats[0], dice: 0, tries: 0, moves: [], winner: -1 };
  }
  function legal(s, p, d) {
    const ps = s.pos[p], res = [];
    let homeDone = false;
    ps.forEach((r, i) => {
      if (r < 0) { if (d === 6 && !homeDone && !ps.includes(0)) { res.push(i); homeDone = true; } }
      else if (r + d <= 43 && !ps.includes(r + d)) res.push(i);
    });
    if (d === 6 && ps.includes(-1) && ps.includes(0)) {
      const k = ps.indexOf(0);
      if (res.includes(k)) return [k];
    }
    return res;
  }
  function next(s) {
    s.turn = s.seats[(s.seats.indexOf(s.turn) + 1) % s.seats.length];
    s.dice = 0; s.moves = []; s.tries = 0;
  }
  function roll(s, d) {
    if (s.winner >= 0 || s.dice) return [];
    const p = s.turn, ev = [{ t: 'roll', p, d }];
    s.dice = d; s.moves = legal(s, p, d);
    if (!s.moves.length) {
      if (s.pos[p].every(r => r < 0 || r >= 40) && s.pos[p].every(r => r < 0) && s.tries < 2) { s.tries++; s.dice = 0; ev.push({ t: 'again', p }); }
      else { next(s); ev.push({ t: 'pass', p }); }
    }
    return ev;
  }
  function move(s, i) {
    if (s.winner >= 0 || !s.dice || !s.moves.includes(i)) return null;
    const p = s.turn, d = s.dice, from = s.pos[p][i], to = from < 0 ? 0 : from + d;
    s.pos[p][i] = to;
    const ev = [{ t: 'move', p, i, from, to }];
    if (to < 40) {
      const a = abs(p, to);
      for (const q of s.seats) if (q !== p) s.pos[q].forEach((r, j) => {
        if (r >= 0 && r < 40 && abs(q, r) === a) { s.pos[q][j] = -1; ev.push({ t: 'hit', p: q, i: j }); }
      });
    }
    if (s.pos[p].every(r => r >= 40)) { s.winner = p; s.dice = 0; s.moves = []; ev.push({ t: 'win', p }); return ev; }
    if (d === 6) { s.dice = 0; s.moves = []; s.tries = 0; } else next(s);
    return ev;
  }
  function threat(s, p, r) {
    const a = abs(p, r); let n = 0;
    for (const q of s.seats) if (q !== p) s.pos[q].forEach(x => {
      if (x < 0 || x >= 40) return;
      const dist = (a - abs(q, x) + 40) % 40;
      if (dist >= 1 && dist <= 6) n++;
    });
    return n;
  }
  function ai(s) {
    const p = s.turn; let best = s.moves[0], bs = -1e9;
    for (const i of s.moves) {
      const from = s.pos[p][i], to = from < 0 ? 0 : from + s.dice;
      let sc = to * 0.6 + Math.random() * 3;
      if (from < 0) sc += 45;
      if (to >= 40) sc += 40 + (to - 40) * 2;
      if (to < 40) {
        const a = abs(p, to);
        for (const q of s.seats) if (q !== p) s.pos[q].forEach(r => { if (r >= 0 && r < 40 && abs(q, r) === a) sc += 100 + r; });
        if (threat(s, p, to)) sc -= 30;
      }
      if (from >= 0 && from < 40 && threat(s, p, from)) sc += 25;
      if (from === 0) sc += 15;
      if (sc > bs) { bs = sc; best = i; }
    }
    return best;
  }
  const E = { TRACK, FIN, HOME, cell, newGame, legal, roll, move, ai };
  if (typeof module !== 'undefined' && module.exports) module.exports = E; else root.Ludo = E;
})(typeof self !== 'undefined' ? self : this);
