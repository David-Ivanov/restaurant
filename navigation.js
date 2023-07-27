const nav = document.querySelector(".nav");
const backface = document.querySelector(".nav__backface");


const openBtn = document.querySelector(".hotbar__btn");
const closeBtn = document.querySelector(".nav__btn");


openBtn.addEventListener("click", function () {
    nav.classList.toggle("nav--active");
    backface.classList.toggle("nav__backface--active");
});

closeBtn.addEventListener("click", function () {
    nav.classList.toggle("nav--active");
    backface.classList.toggle("nav__backface--active");
});

