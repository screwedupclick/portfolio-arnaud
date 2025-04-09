const img = document.getElementById("glitchImg");

img.addEventListener("click", () => {
  img.classList.add("glitch-active");
  setTimeout(() => {
    img.classList.remove("glitch-active");
  }, 1000); // effet dure 1 seconde
});

window.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("zenText");
  setTimeout(() => {
    text.classList.add("visible");
  }, 500); // petit délai zen avant l'apparition
});
