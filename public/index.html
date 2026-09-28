<!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>منچ</title>
<style>
:root{--bg:#0d1b26;--pn:#152a39;--ink:#eaf1f7;--mut:#8fa6b8;--line:#2a475b}
*{box-sizing:border-box}[hidden]{display:none!important}
html,body{margin:0;min-height:100%;background:radial-gradient(1100px 700px at 50% -10%,#1d3d52,var(--bg)) fixed;color:var(--ink);font-family:Tahoma,"Segoe UI",system-ui,sans-serif}
body{padding:env(safe-area-inset-top) 12px env(safe-area-inset-bottom)}
button,input{font:inherit;color:inherit}
:focus-visible{outline:3px solid #7fc0ff;outline-offset:2px}
.scr{display:none;max-width:520px;margin:0 auto;padding:16px 0}
.scr.on{display:flex;flex-direction:column;gap:14px}
h1{font-size:54px;margin:28px 0 0;text-align:center}
h2{margin:0;font-size:20px}
.sub{text-align:center;color:var(--mut);margin:0 0 10px}
.btn{background:var(--pn);border:1px solid var(--line);border-radius:14px;padding:14px 16px;cursor:pointer;text-align:start;transition:transform .12s,border-color .12s}
.btn:hover{border-color:#5f8fae}.btn:active{transform:scale(.98)}
.btn b{display:block;font-size:17px;margin-bottom:2px}.btn span{color:var(--mut);font-size:13px}
.btn.pri{background:#2b7fd6;border-color:#5aa5f5;text-align:center;font-weight:700}
.btn.ghost{background:transparent;text-align:center}
.fld{display:flex;flex-direction:column;gap:8px}.fld label{color:var(--mut);font-size:14px}
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chips button{flex:1;min-width:56px;padding:11px 8px;border-radius:12px;background:var(--pn);border:2px solid var(--line);cursor:pointer}
.chips button.sel{border-color:#7fc0ff;background:#1f425a}
.chips button[data-c]{border-bottom:5px solid var(--c)}
input{background:var(--pn);border:2px solid var(--line);border-radius:12px;padding:12px;width:100%}
.hr{border-top:1px solid var(--line);margin:6px 0}
#code{font-size:44px;font-weight:700;letter-spacing:10px;text-align:center;direction:ltr;padding:8px;background:var(--pn);border-radius:16px;border:1px dashed #5f8fae;cursor:pointer}
.slot{display:flex;align-items:center;gap:10px;padding:12px 14px;background:var(--pn);border-radius:12px;border-inline-start:6px solid var(--c)}
.slot small{margin-inline-start:auto;color:var(--mut)}
#bar{display:flex;align-items:center;gap:10px}
#st{flex:1;font-size:19px;font-weight:700;text-align:center;min-height:28px}
.ic{width:42px;height:42px;border-radius:12px;border:1px solid var(--line);background:var(--pn);cursor:pointer}
#bw{width:min(100%,calc(100vh - 230px));min-width:280px;margin:0 auto;aspect-ratio:1;filter:drop-shadow(0 14px 30px rgba(0,0,0,.45))}
#bd{width:100%;height:100%;display:block}
.pc{transition:transform .14s ease-out}
.pc .ring{opacity:0}
.pc.can{cursor:pointer}
.pc.can .ring{opacity:1;animation:pu .9s ease-in-out infinite}
@keyframes pu{50%{transform:scale(1.2);opacity:.45}}
#ctl{display:flex;align-items:center;gap:14px;justify-content:center}
#pl{display:flex;gap:8px;flex-wrap:wrap;flex:1}
.card{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:10px;background:var(--pn);border:2px solid transparent;font-size:13px}
.card i{width:12px;height:12px;border-radius:50%;background:var(--c)}
.card small{color:var(--mut)}.card.turn{border-color:var(--c)}
#dice{width:76px;height:76px;flex:none;border-radius:18px;background:#fff;border:4px solid var(--c,#888);display:grid;grid-template:repeat(3,1fr)/repeat(3,1fr);padding:9px;cursor:pointer;box-shadow:0 6px 14px rgba(0,0,0,.4)}
#dice:disabled{cursor:default;opacity:.92}
#dice.go{animation:bob 1s ease-in-out infinite}
#dice.rl{transform:rotate(14deg) scale(1.06)}
@keyframes bob{50%{transform:translateY(-6px)}}
.pip{border-radius:50%;margin:2px}.pip.on{background:#1a2733}
#win{position:fixed;inset:0;background:rgba(6,14,20,.82);display:flex;align-items:center;justify-content:center;padding:20px;z-index:5}
#win div{background:var(--pn);border:2px solid var(--line);border-radius:20px;padding:26px;display:flex;flex-direction:column;gap:12px;min-width:260px;text-align:center}
#toast{position:fixed;inset-inline:0;bottom:calc(20px + env(safe-area-inset-bottom));margin:auto;width:max-content;max-width:90%;background:#000c;padding:10px 16px;border-radius:12px;z-index:9}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>
</head>
<body>
<section id="menu" class="scr on">
  <h1>منچ</h1>
  <p class="sub">نوع بازی رو انتخاب کن</p>
  <button class="btn" data-m="local"><b>چندنفره روی یک دستگاه</b><span>۲ تا ۴ نفر، نوبتی پشت هم</span></button>
  <button class="btn" data-m="ai"><b>مقابل کامپیوتر</b><span>۱ تا ۳ حریف هوشمند</span></button>
  <button class="btn" data-m="online"><b>آنلاین</b><span>هر بازیکن از دستگاه خودش وصل می‌شه</span></button>
</section>

<section id="setup" class="scr">
  <h2 id="sh"></h2>
  <div id="sf" class="scr on" style="padding:0"></div>
  <button class="btn ghost" id="sb">بازگشت</button>
</section>

<section id="lobby" class="scr">
  <h2>اتاق بازی</h2>
  <p class="sub" style="margin:0">این کد رو به دوستانت بده (برای کپی بزن)</p>
  <div id="code" role="button" tabindex="0"></div>
  <div id="slots" style="display:flex;flex-direction:column;gap:8px"></div>
  <p class="sub" id="lh" style="margin:0"></p>
  <button class="btn pri" id="go">شروع بازی</button>
  <button class="btn ghost" id="lv">خروج</button>
</section>

<section id="game" class="scr">
  <div id="bar"><button class="ic" id="back" aria-label="خروج">✕</button><div id="st"></div><span class="ic" style="visibility:hidden"></span></div>
  <div id="bw"><svg id="bd" viewBox="0 0 110 110" role="img" aria-label="صفحه منچ"></svg></div>
  <div id="ctl"><div id="pl"></div><button id="dice" aria-label="تاس"></button></div>
  <div id="win" hidden><div><h2 id="wt"></h2><button class="btn pri" id="again">بازی دوباره</button><button class="btn ghost" id="wm">منوی اصلی</button></div></div>
</section>
<div id="toast" hidden></div>

<script src="engine.js"></script>
<script>
const $=q=>document.querySelector(q),E=Ludo,sleep=t=>new Promise(r=>setTimeout(r,t));
const COL=['#e5484d','#3e8cf0','#f5b921','#30b56b'],DK=['#9c2227','#1c58ad','#a87700','#17703f'],CN=['قرمز','آبی','زرد','سبز'];
const SEATS={2:[0,2],3:[0,1,2],4:[0,1,2,3]},NS='http://www.w3.org/2000/svg';
const el=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e;};
const xy=c=>[c[0]*10+5,c[1]*10+5];
const sel={n:2,opp:1,col:0,size:4};
let G=null,WS=null,Q=Promise.resolve(),room=null,gid=0,sess=null,tt;
try{sess=JSON.parse(localStorage.getItem('mench')||'null')}catch{}
const show=id=>document.querySelectorAll('.scr').forEach(s=>{if(s.parentElement===document.body)s.classList.toggle('on',s.id===id)});
const toast=m=>{const t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(tt);tt=setTimeout(()=>t.hidden=true,2600)};
const rnd=()=>1+Math.floor(Math.random()*6);
const uid=()=>(crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2)+Date.now());

/* dice */
const D=$('#dice');for(let i=0;i<9;i++)D.append(Object.assign(document.createElement('span'),{className:'pip'}));
const PIPS={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
const face=n=>[...D.children].forEach((p,i)=>p.classList.toggle('on',PIPS[n].includes(i)));
async function rollAnim(d){D.classList.add('rl');for(let k=0;k<8;k++){face(rnd());await sleep(70)}D.classList.remove('rl');face(d);if(G)G.last=d;await sleep(250)}

/* board */
function build(){
  const b=$('#bd');b.innerHTML='';
  el('rect',{width:110,height:110,rx:10,fill:'#e9eff5'},b);
  for(let p=0;p<4;p++){
    const ox=p===1||p===2?70:0,oy=p>=2?70:0;
    el('rect',{x:ox+2,y:oy+2,width:36,height:36,rx:8,fill:COL[p],'fill-opacity':.22,stroke:COL[p],'stroke-width':1.2},b);
    E.HOME[p].forEach(c=>{const[x,y]=xy(c);el('circle',{cx:x,cy:y,r:4.6,fill:'#fff','fill-opacity':.75,stroke:COL[p],'stroke-opacity':.5},b)});
    E.FIN[p].forEach(c=>{const[x,y]=xy(c);el('circle',{cx:x,cy:y,r:4.2,fill:COL[p],'fill-opacity':.42,stroke:COL[p]},b)});
  }
  E.TRACK.forEach((c,k)=>{const[x,y]=xy(c),st=k%10===0;el('circle',{cx:x,cy:y,r:4.2,fill:st?COL[k/10]:'#fff',stroke:st?DK[k/10]:'#b7c4d0','stroke-width':.8},b)});
  [[[49,49],[55,55],[49,61]],[[49,49],[61,49],[55,55]],[[61,49],[61,61],[55,55]],[[49,61],[61,61],[55,55]]].forEach((t,p)=>el('polygon',{points:t.join(' '),fill:COL[p],stroke:DK[p],'stroke-width':.5},b));
  const g=el('g',{},b);G.pc=[];
  for(let p=0;p<4;p++){G.pc[p]=[];for(let i=0;i<4;i++){
    const n=el('g',{class:'pc'},g);
    el('ellipse',{cx:0,cy:2.6,rx:3.4,ry:1.4,fill:'#000','fill-opacity':.28},n);
    el('circle',{class:'ring',r:5.6,fill:'none',stroke:'#fff','stroke-width':1.3},n);
    el('circle',{r:3.9,fill:COL[p],stroke:DK[p],'stroke-width':.9},n);
    el('circle',{cx:-1.2,cy:-1.3,r:1.2,fill:'#fff','fill-opacity':.5},n);
    n.onclick=()=>pick(p,i);G.pc[p][i]=n;
  }}
}
function setPc(p,i,r){const[x,y]=xy(E.cell(p,r,i));G.pc[p][i].style.transform=`translate(${x}px,${y}px)`}
function place(){for(let p=0;p<4;p++)for(let i=0;i<4;i++){G.pc[p][i].style.display=G.s.seats.includes(p)?'':'none';setPc(p,i,G.s.pos[p][i])}}

/* game flow */
const mine=()=>G.mode==='local'||G.s.turn===G.me;
const can=k=>G&&!G.busy&&G.s.winner<0&&mine()&&(k==='roll'?!G.s.dice:G.s.dice>0);
function ui(){
  const s=G.s,p=s.turn,pl=$('#pl');pl.innerHTML='';
  s.seats.forEach(q=>{const d=document.createElement('div');d.className='card'+(q===p&&s.winner<0?' turn':'');d.style.setProperty('--c',COL[q]);
    d.innerHTML='<i></i><b></b><small></small>';d.children[1].textContent=G.names[q]+(G.off&&G.off[q]?' (آفلاین)':'');
    d.children[2].textContent=s.pos[q].filter(r=>r>=40).length+'/4';pl.append(d)});
  const my=can('roll')||can('move');
  $('#st').textContent=s.winner>=0?G.names[s.winner]+' برنده شد':G.busy?'':my?(s.dice?'یک مهره انتخاب کن':(G.mode==='local'?G.names[p]+': تاس بنداز':'تاس بنداز')):'نوبت '+G.names[p];
  $('#st').style.color=COL[p];
  D.disabled=!can('roll');D.classList.toggle('go',can('roll'));D.style.setProperty('--c',COL[p]);
  for(let q=0;q<4;q++)for(let i=0;i<4;i++)G.pc[q][i].classList.toggle('can',can('move')&&q===p&&s.moves.includes(i));
}
async function walk(e){
  const n=G.pc[e.p][e.i];n.parentNode.appendChild(n);
  if(e.from<0){setPc(e.p,e.i,e.to);await sleep(300);return}
  for(let r=e.from+1;r<=e.to;r++){setPc(e.p,e.i,r);await sleep(150)}
}
async function play(ev){
  const id=G.id;G.busy=true;ui();
  for(const e of ev){
    if(e.t==='roll')await rollAnim(e.d);
    else if(e.t==='move')await walk(e);
    else if(e.t==='hit'){await sleep(150);setPc(e.p,e.i,-1);await sleep(380)}
    else if(e.t==='pass')await sleep(450);
  }
  if(!G||G.id!==id)return;
  place();G.busy=false;ui();after();
}
function after(){
  const s=G.s,id=G.id;
  if(s.winner>=0){$('#wt').textContent=G.names[s.winner]+' برنده شد 🎉';$('#again').hidden=G.mode==='online'&&!room.host;$('#win').hidden=false;return}
  if(G.mode!=='online'&&!G.humans.includes(s.turn)){setTimeout(()=>{if(G&&G.id===id&&!G.busy){play(s.dice?E.move(s,E.ai(s)):E.roll(s,rnd()))}},700);return}
  if(mine()&&s.dice&&s.moves.length===1)setTimeout(()=>{if(G&&G.id===id&&!G.busy&&G.s.dice)doMove(G.s.moves[0])},450);
}
function doRoll(){
  if(!can('roll'))return;
  if(G.mode==='online'){G.busy=true;ui();WS&&WS.send(JSON.stringify({t:'roll'}))}else play(E.roll(G.s,rnd()));
}
function doMove(i){
  if(!can('move')||!G.s.moves.includes(i))return;
  if(G.mode==='online'){G.busy=true;ui();WS&&WS.send(JSON.stringify({t:'move',i}))}else play(E.move(G.s,i));
}
const pick=(p,i)=>{if(G&&p===G.s.turn)doMove(i)};
D.onclick=doRoll;

function startGame(cfg){
  G=Object.assign({id:++gid,busy:false,last:1,cfg},cfg);G.s=cfg.s||E.newGame(cfg.seats);
  build();place();face(1);ui();$('#win').hidden=true;show('game');after();
}
const startLocal=()=>{const seats=SEATS[sel.n];startGame({mode:'local',seats,humans:seats.slice(),names:CN.slice(),me:-1})};
function startAi(){
  const me=sel.col,o={1:[(me+2)%4],2:[(me+1)%4,(me+3)%4],3:[0,1,2,3].filter(x=>x!==me)}[sel.opp];
  const names=CN.map(c=>'کامپیوتر '+c);names[me]='تو';
  startGame({mode:'ai',seats:[me,...o].sort(),humans:[me],names,me});
}

/* online */
const send=o=>WS&&WS.readyState===1&&WS.send(JSON.stringify(o));
function connect(){return new Promise((res,rej)=>{
  const w=new WebSocket((location.protocol==='https:'?'wss':'ws')+'://'+location.host);
  w.onopen=()=>{WS=w;res()};w.onerror=()=>rej();
  w.onmessage=e=>{let m;try{m=JSON.parse(e.data)}catch{return}Q=Q.then(()=>onMsg(m)).catch(()=>{})};
  w.onclose=()=>{if(WS===w){WS=null;if(sess)setTimeout(rejoin,1500)}};
})}
async function rejoin(){if(!sess||WS)return;try{await connect();send({t:'join',code:sess.code,name:sess.name,token:sess.token})}catch{setTimeout(rejoin,2500)}}
function names(m){const n=[],off=[];m.seats.forEach((sd,k)=>{const x=m.slots[k];n[sd]=x?x.name:'—';off[sd]=!!x&&!x.bot&&!x.on});return{n,off}}
async function onMsg(m){
  if(m.t==='err'){toast(m.m);if(G)G.busy=false;if(G)ui();if(m.fatal)leave();return}
  if(m.t==='room'){
    room=m;sess.code=m.code;localStorage.setItem('mench',JSON.stringify(sess));
    const{n,off}=names(m);
    if(m.started&&G&&G.mode==='online'){G.names=n;G.off=off;ui()}
    else if(!m.started){show('lobby');$('#code').textContent=m.code;$('#go').hidden=!m.host;
      $('#lh').textContent=m.host?'جای خالی و بازیکنِ آفلاین رو کامپیوتر پر می‌کنه.':'منتظر شروع بازی توسط سازنده اتاق…';
      const box=$('#slots');box.innerHTML='';m.seats.forEach((sd,k)=>{const x=m.slots[k],d=document.createElement('div');d.className='slot';d.style.setProperty('--c',COL[sd]);
        d.innerHTML='<b></b><small></small>';d.children[0].textContent=(x?x.name:'منتظر بازیکن…')+(sd===m.me?' (تو)':'');d.children[1].textContent=CN[sd];box.append(d)})}
    return;
  }
  if(m.t==='state'){
    const{n,off}=names(room);
    if(!G||G.mode!=='online'||m.new){startGame({mode:'online',s:m.s,seats:m.s.seats,humans:[room.me],me:room.me,names:n});G.off=off;return}
    G.names=n;G.off=off;G.s=m.s;
    if(m.ev&&m.ev.length)await play(m.ev);else{G.busy=false;place();ui();after()}
  }
}
async function online(kind){
  const name=($('#nm').value.trim()||'بازیکن').slice(0,14);localStorage.setItem('mench-name',name);
  sess=null;if(WS){const w=WS;WS=null;w.close()}
  try{await connect()}catch{toast('اتصال به سرور برقرار نشد');return}
  sess={token:uid(),name,code:''};
  send(kind==='create'?{t:'create',name,size:sel.size,token:sess.token}:{t:'join',code:$('#cd').value.trim().toUpperCase(),name,token:sess.token});
}
function leave(){sess=null;localStorage.removeItem('mench');if(WS){const w=WS;WS=null;w.close()}room=null;G=null;$('#win').hidden=true;show('menu')}

/* menu / setup */
function setup(mode){
  const f=$('#sf');f.innerHTML='';$('#sh').textContent={local:'چندنفره روی یک دستگاه',ai:'مقابل کامپیوتر',online:'بازی آنلاین'}[mode];
  const row=(label,vals,key,fmt,col)=>{const d=document.createElement('div');d.className='fld';d.innerHTML='<label></label><div class="chips"></div>';d.firstChild.textContent=label;
    vals.forEach(v=>{const b=document.createElement('button');b.textContent=fmt?fmt(v):v;if(col){b.dataset.c=1;b.style.setProperty('--c',COL[v])}b.classList.toggle('sel',sel[key]===v);
      b.onclick=()=>{sel[key]=v;[...d.lastChild.children].forEach(x=>x.classList.toggle('sel',x===b))};d.lastChild.append(b)});f.append(d)};
  const btn=(t,fn,c)=>{const b=document.createElement('button');b.className='btn '+(c||'pri');b.textContent=t;b.onclick=fn;f.append(b)};
  if(mode==='local'){row('تعداد بازیکن‌ها',[2,3,4],'n');btn('شروع بازی',startLocal)}
  if(mode==='ai'){row('تعداد حریف‌ها',[1,2,3],'opp');row('رنگ تو',[0,1,2,3],'col',v=>CN[v],1);btn('شروع بازی',startAi)}
  if(mode==='online'){
    const d=document.createElement('div');d.className='fld';d.innerHTML='<label>اسم تو</label><input id="nm" maxlength="14" autocomplete="off">';f.append(d);$('#nm').value=localStorage.getItem('mench-name')||'';
    row('تعداد بازیکن‌های اتاق',[2,3,4],'size');btn('ساخت اتاق جدید',()=>online('create'));
    f.append(Object.assign(document.createElement('div'),{className:'hr'}));
    const c=document.createElement('div');c.className='fld';c.innerHTML='<label>یا با کد وارد شو</label><input id="cd" maxlength="4" dir="ltr" autocomplete="off" style="text-transform:uppercase;text-align:center;letter-spacing:8px">';f.append(c);
    btn('ورود به اتاق',()=>online('join'),'');
  }
  show('setup');
}
document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>setup(b.dataset.m));
$('#sb').onclick=()=>show('menu');
$('#lv').onclick=leave;$('#wm').onclick=leave;
$('#back').onclick=()=>{if(confirm('از بازی خارج می‌شی؟')){G&&G.mode==='online'?leave():(G=null,show('menu'))}};
$('#go').onclick=()=>send({t:'start'});
$('#again').onclick=()=>G.mode==='online'?send({t:'start'}):startGame(G.cfg);
$('#code').onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText($('#code').textContent).then(()=>toast('کد کپی شد'),()=>{})};
if(sess)rejoin();
</script>
</body>
</html>
