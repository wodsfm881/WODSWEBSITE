const STREAM_URL = "https://planetoldies.liberatedstreaming.com/";
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

playButton.addEventListener("click", () => {
  window.open(STREAM_URL, "_blank", "noopener,noreferrer");
  playerMessage.textContent = "Opening the live stream";
});