const STREAM_URL = "https://planetoldies.liberatedstreaming.com/";
const audio = document.getElementById("stationAudio");
const playButton = document.getElementById("playButton");
const playerMessage = document.getElementById("playerMessage");
const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".navlinks");

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

