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

// Abrir Cards Servicios

const serviciosCard = document.querySelectorAll(".servicios__rowCard");

serviciosCard.forEach((card) => {
  card.addEventListener("click", abrirServicio);
});

function abrirServicio(e) {
  const card = e.target;
  if (card.classList.contains("servicios__rowCard")) {
    const cardClick = card.childNodes[1].childNodes[5];
    cardClick.classList.toggle("contenidoOpen");
  } else {
    if (card.classList.contains("servicios__rowCard_principal")) {
      const cardClick = card.parentNode.childNodes[1].childNodes[5];
      cardClick.classList.toggle("contenidoOpen");
    } else {
      if (card.classList.contains("pCard")) {
        const cardClick = card.parentNode;
        cardClick.classList.toggle("contenidoOpen");
      }
    }
  }
}

const contenidoCard = document.querySelectorAll(".contenidoOpen");
contenidoCard.forEach((card) => {
  card.addEventListener("click", () => {
    console.log(contenidoCard);
    if (contenidoCard) {
      contenidoCard.classList.remove("contenidoOpen");
    }
  });
});

// Abrir Card Planes

const accordionButton = document.querySelectorAll(".planes-mobile__accordBoton");

accordionButton.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("planes-mobile__accordBotonActive");

    const accordionContenido = button.nextElementSibling;
    if (button.classList.contains("planes-mobile__accordBotonActive")) {
      accordionContenido.style.maxHeight = accordionContenido.scrollHeight + "px";
    } else {
      accordionContenido.style.maxHeight = 0;
    }
  });
});

//  Abrir Hamburger Menu

const botonHamburger = document.querySelector(".header__hamburger");
const menuMobile = document.querySelector(".header__navMobile");

botonHamburger.addEventListener("click", function (e) {
  e.preventDefault();
  botonHamburger.classList.toggle("open");
  menuMobile.classList.toggle("header__navMobileOpen");
});

menuMobile.addEventListener("click", function () {
  menuMobile.classList.remove("header__navMobileOpen");
  botonHamburger.classList.remove("open");
});
