/* ================= INTRO ================= */
window.onload = () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    intro.style.opacity = "0";
    setTimeout(() => intro.remove(), 1200);
  }, 2500);
};

/* ================= LIVE TIME ================= */
setInterval(() => {
  document.getElementById("liveTime").innerText =
    new Date().toLocaleTimeString();
}, 1000);

/* ================= AUDIO (ONLINE SOURCES) ================= */
const bgMusic = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

const clickSound = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-fast-small-sweep-transition-166.mp3"
);
const hoverSound = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-game-hover-1337.mp3"
);
const scrollSound = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-quick-woosh-transition-1382.mp3"
);

bgMusic.volume = 0.4;
clickSound.volume = 0.7;
hoverSound.volume = 0.6;
scrollSound.volume = 0.3;

let soundOn = false;

/* MUSIC TOGGLE */
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
