const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");
const hoverSound = document.getElementById("hoverSound");
const scrollSound = document.getElementById("scrollSound");
const musicToggle = document.getElementById("musicToggle");

let musicOn = false;

musicToggle.addEventListener("click", () => {
  if (!musicOn) {
    bgMusic.volume = 0.5;
    bgMusic.play();
    musicToggle.textContent = "🔈";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🔊";
  }
  musicOn = !musicOn;
  clickSound.play();
});

// Hover sound
document.querySelectorAll("a, button, span").forEach(el => {
  el.addEventListener("mouseenter", () => hoverSound.play());
});

// Scroll sound
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const now = Date.now();
  if (now - lastScroll > 500) {
    scrollSound.play();
    lastScroll = now;
  }
});

// Live Time
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
