// INTRO AUTO HIDE
setTimeout(()=>{
  const intro=document.getElementById("intro");
  if(intro) intro.style.display="none";
},3000);

// LIVE TIME
function updateTime(){
  const now=new Date();
  document.getElementById("liveTime").textContent =
    now.toLocaleTimeString();
}
setInterval(updateTime,1000);
updateTime();

// MUSIC SYSTEM
const music=document.getElementById("bgMusic");
const toggle=document.getElementById("musicToggle");
let musicOn=false;

toggle.onclick=()=>{
  if(!musicOn){
    music.play();
    toggle.textContent="🔇";
  }else{
    music.pause();
    toggle.textContent="🔊";
  }
  musicOn=!musicOn;
};

// UI SOUNDS
const clickSound=document.getElementById("clickSound");
const hoverSound=document.getElementById("hoverSound");
const scrollSound=document.getElementById("scrollSound");

// Click sound
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
