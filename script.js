const bgMusic=document.getElementById("bgMusic");
const clickSound=document.getElementById("clickSound");
const hoverSound=document.getElementById("hoverSound");
const scrollSound=document.getElementById("scrollSound");

let started=false;
document.addEventListener("click",()=>{
  if(!started){
    bgMusic.volume=0.35;
    bgMusic.play();
    started=true;
  }
  clickSound.currentTime=0;
  clickSound.play();
});

document.querySelectorAll("a,span,img").forEach(el=>{
  el.addEventListener("mouseenter",()=>{
    hoverSound.currentTime=0;
    hoverSound.play();
  });
});

let last=0;
window.addEventListener("scroll",()=>{
  if(Date.now()-last>600){
    scrollSound.currentTime=0;
    scrollSound.play();
    last=Date.now();
  }
});

// LIVE TIME
function time(){
  liveTime.textContent=new Date().toLocaleTimeString();
}
setInterval(time,1000);time();

// CHAKRA PARTICLES
const c=document.getElementById("chakra");
const ctx=c.getContext("2d");
function resize(){c.width=innerWidth;c.height=innerHeight}
resize();addEventListener("resize",resize);

let p=[];
for(let i=0;i<120;i++)
  p.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2+1,s:Math.random()*1+0.3});

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle="rgba(0,255,255,.6)";
  p.forEach(a=>{
    ctx.beginPath();
    ctx.arc(a.x,a.y,a.r,0,Math.PI*2);
    ctx.fill();
    a.y-=a.s;
    if(a.y<0)a.y=c.height;
  });
  requestAnimationFrame(draw);
}
draw();// Live Time
function updateTime() {
  const now = new Date();
  document.getElementById("liveTime").textContent =
    now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();// Click sound
document.querySelectorAll("a,button,.card").forEach(el=>{
  el.addEventListener("click",()=>{
    clickSound.currentTime=0;
    clickSound.play();
  });
});

// Hover sound
document.querySelectorAll(".card,span,a").forEach(el=>{
  el.addEventListener("mouseenter",()=>{
    hoverSound.currentTime=0;
    hoverSound.play();
  });
});

// Scroll sound (once)
let scrolled=false;
window.addEventListener("scroll",()=>{
  if(!scrolled){
    scrollSound.play();
    scrolled=true;
  }
});/* MUSIC TOGGLE */
toggle.onclick = () => {
  soundOn = !soundOn;
  toggle.textContent = soundOn ? "🔇" : "🔊";
  soundOn ? bgMusic.play() : bgMusic.pause();
};

/* CLICK + HOVER SOUNDS */
document.querySelectorAll("a, .card").forEach(el => {
  el.addEventListener("mouseenter", () => {
    if (soundOn) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });

  el.addEventListener("click", () => {
    if (soundOn) {
      clickSound.currentTime = 0;
      clickSound.play();
    }
  });
});

/* SCROLL SOUND */
let scrollTimeout;
window.addEventListener("scroll", () => {
  if (!soundOn) return;
  clearTimeout(scrollTimeout);
  scrollSound.currentTime = 0;
  scrollSound.play();
  scrollTimeout = setTimeout(() => {}, 150);
});  if(soundOn){
    scrollSound.currentTime=0;
    scrollSound.play();
  }
});
