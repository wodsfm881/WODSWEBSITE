const STREAM_URL = "";
const audio = document.getElementById("stationAudio");
const playButton = document.getElementById("playButton");
const playerMessage = document.getElementById("playerMessage");
const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".navlinks");

document.getElementById("year").textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

playButton.addEventListener("click", async () => {
  if (!STREAM_URL) {
    playerMessage.textContent = "Live stream URL will be connected here";
    return;
  }
  if (!audio.src) audio.src = STREAM_URL;
  if (audio.paused) {
    try { await audio.play(); playButton.textContent = "❚❚"; playerMessage.textContent = "Now streaming WODS 88.1"; }
    catch { playerMessage.textContent = "Unable to start stream"; }
  } else {
    audio.pause(); playButton.textContent = "▶"; playerMessage.textContent = "Stream paused";
  }
});