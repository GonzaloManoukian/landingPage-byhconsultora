// Nav Bar Color Change on Scroll

const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header__logo");
const headerNav = document.querySelector(".header__nav");

window.addEventListener("scroll", function (e) {
  if (window.scrollY != 0) {
    header.classList.add("headerScroll");
    headerLogo.classList.add("header__logoScroll");
    headerNav.classList.add("header__navScroll");
  } else {
    header.classList.remove("headerScroll");
    headerLogo.classList.remove("header__logoScroll");
    headerNav.classList.remove("header__navScroll");
  }
});

// Footer Button Color Change on Scroll

const footerHeight = document.querySelector(".footer").offsetHeight - 80;
const botonWhatsapp = document.querySelector(".footer__linksWhatsapp");

window.addEventListener("scroll", function (e) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - footerHeight) {
    botonWhatsapp.classList.remove("footer__linksWhatsappScroll");
  } else {
    botonWhatsapp.classList.add("footer__linksWhatsappScroll");
  }
});
