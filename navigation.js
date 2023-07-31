const nav = document.querySelector(".nav");
const backface = document.querySelector(".nav__backface");

const link = document.querySelectorAll(".nav__link");


const openBtn = document.querySelector(".hotbar__btn");
const closeBtn = document.querySelector(".nav__btn");
const openDesktopBtn = document.querySelector(".hotbar__btn-desktop");


openBtn.addEventListener("click", function () {
    nav.classList.toggle("nav--active");
    backface.classList.toggle("nav__backface--active");
    document.body.style.overflow = "hidden";
});
openDesktopBtn.addEventListener("click", function () {
    nav.classList.toggle("nav--active");
    backface.classList.toggle("nav__backface--active");
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
    nav.classList.toggle("nav--active");
    backface.classList.toggle("nav__backface--active");
    document.body.style.overflow = "scroll";
});

link.forEach((value) => {
    value.addEventListener("click", function () {
        nav.classList.toggle("nav--active");
        backface.classList.toggle("nav__backface--active");
        document.body.style.overflow = "scroll";
    });
})



