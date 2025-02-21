const button = document.querySelector("#start-btn");
button.addEventListener("click", function () {
  const scrollOffset = window.innerHeight * 0.9; // Adjusts based on screen height
  window.scroll({
    top: scrollOffset,
    left: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".goat").classList.add("opc");
});
