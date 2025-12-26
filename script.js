/* INTRO */
window.onload = () => {
  setTimeout(() => {
    document.getElementById("intro").style.opacity = "0";
    setTimeout(()=>document.getElementById("intro").remove(),1200);
  }, 2500);
};

/* LIVE TIME */
setInterval(()=>{
  document.getElementById("liveTime").innerText =
    new Date().toLocaleTimeString();
},1000);

/* AUDIO */
const bgMusic = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

const clickSound = new Audio("click.mp3");
const hoverSound = new Audio("hover.mp3");
const scrollSound = new Audio("scroll.mp3");

let soundOn = false;

toggle.onclick = () => {
  soundOn = !soundOn;
  toggle.textContent = soundOn ? "🔇" : "🔊";
  soundOn ? bgMusic.play() : bgMusic.pause();
};

document.querySelectorAll("a,.card").forEach(el=>{
  el.addEventListener("mouseenter",()=>soundOn&&hoverSound.play());
  el.addEventListener("click",()=>soundOn&&clickSound.play());
});

window.addEventListener("scroll",()=>{
  if(soundOn){
    scrollSound.currentTime=0;
    scrollSound.play();
  }
});
