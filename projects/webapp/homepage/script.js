document.addEventListener("DOMContentLoaded", () => {
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sideMenu.style.left = "0";
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  sideMenu.style.left = "-250px";
  overlay.style.display = "none";
});
});
