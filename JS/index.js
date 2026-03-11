// index main menu

let menuBtn = document.getElementById("menu-bars");
let menu = document.querySelector("header .btns");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-xmark");
});
