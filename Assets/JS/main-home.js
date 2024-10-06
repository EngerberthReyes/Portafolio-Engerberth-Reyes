"use strict";

const containerBtn = document.querySelector(".container-switch");
const body = document.body;
const html = document.documentElement;
const flecha = document.getElementById("flecha");
const flechaImagen = document.querySelector(".flechaUp-svg");
const linkRedireccionar = document.querySelectorAll(".link_redireccionamiento");
const articuloPrincipal = document.querySelectorAll(".articulo-principal");
const articuloPrincipalDos = document.querySelectorAll(
  ".articulo-principal__informacion"
);
const header = document.querySelector(".header-container");
const btnWhite = document.querySelector(".sol");
const btnBlack = document.querySelector(".luna");
const imagenesArticulos = document.querySelectorAll(".imagen");

// Inicializar en modo oscuro
containerBtn.style.justifyContent = "flex-end";
containerBtn.style.backgroundColor = "#000000";
containerBtn.style.outline = "2px solid #ffffff";
body.classList.add("dark-mode");
header.classList.add("dark-mode");
header.style.backgroundColor = "#0f0f0f";

articuloPrincipal.forEach((elemento) => {
  elemento.style.backgroundColor = "#000000";
  elemento.style.color = "#ffffff";
  elemento.style.borderRadius = "20px";
});

articuloPrincipalDos.forEach((elemento) => {
  elemento.style.backgroundColor = "#000000";
  elemento.style.color = "#ffffff";

  elemento.style.borderRadius = "20px";
});

imagenesArticulos.forEach((elemento) => {
  elemento.style.boxShadow = "0px 0px 10px 0 #fdfdfd";
});

header.style.boxShadow = "rgba(255 255 255 / 46%) 0px 0px 13px 0px";

linkRedireccionar.forEach((elemento) => {
  elemento.style.outline = "2px solid #ffffff";
  elemento.classList.add("dark-mode");
});

const transicionOscuro = () => {
  btnWhite.style.opacity = "0";
  btnWhite.style.transform = "translateX(24px)";
  btnBlack.style.opacity = "1";
  btnBlack.style.transform = "translateX(-75px)";
  flechaImagen.src = "Assets/IMG/Banner/arrowleftWhite.svg";
  flechaImagen.style.width = "25px";
  flecha.style.backgroundColor = "#0f0f0f";
  flecha.style.outlineColor = "#eeeeee";
  html.style.colorScheme = "dark";
};

const transicionClaro = () => {
  btnWhite.style.opacity = "1";
  btnWhite.style.transform = "translateX(22px)";
  btnBlack.style.opacity = "0";
  btnBlack.style.transform = "translateX(24px)";
  flechaImagen.src = "Assets/IMG/Banner/arrowleft.svg";
  flecha.style.backgroundColor = "#eeeeee";
  flecha.style.outlineColor = "#0f0f0f";
  html.style.colorScheme = "light";
};

transicionOscuro();

flecha.style.opacity = "0";

window.addEventListener("scroll", () => {
  if (scrollY >= 192) {
    flecha.style.opacity = "1";
    flecha.style.transform = "translateY(0px)";
  } else {
    flecha.style.opacity = "0";
    flecha.style.transform = "translateY(70px)";
  }
});

flecha.addEventListener("click", () => {
  scrollTo(0, -scrollY);
});

containerBtn.addEventListener("click", () => {
  const btnEstiloActual =
    getComputedStyle(containerBtn).backgroundColor === "rgb(0, 0, 0)"
      ? true
      : false;

  if (btnEstiloActual) {
    // Modo Claro
    containerBtn.style.backgroundColor = "#fdfdfd";
    containerBtn.style.outline = "2px solid #000000";
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    header.classList.remove("dark-mode");
    header.classList.add("light-mode");
    header.style.backgroundColor = "#fdfdfd";

    articuloPrincipal.forEach((elemento) => {
      elemento.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
      elemento.style.borderRadius = "20px";
      elemento.style.backgroundColor = "#ffdda88a";
      elemento.style.color = "#000000";
      elemento.style.outline = "none";
    });

    articuloPrincipalDos.forEach((elemento) => {
      elemento.style.backgroundColor = "#ffdda88a";
      elemento.style.color = "#000000";
      elemento.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
      elemento.style.borderRadius = "20px";
      elemento.style.outline = "none";
    });

    imagenesArticulos.forEach((elemento) => {
      elemento.style.boxShadow = "0px 0px 10px 0 #000000";
    });

    header.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";

    linkRedireccionar.forEach((elemento) => {
      elemento.style.outline = "2px solid #000000";
      elemento.classList.remove("dark-mode");
      elemento.classList.add("light-mode");
    });

    transicionClaro();
  } else {
    // Modo Oscuro
    containerBtn.style.backgroundColor = "#000000";
    containerBtn.style.outline = "2px solid #ffffff";
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    header.classList.add("dark-mode");
    header.classList.remove("light-mode");
    header.style.backgroundColor = "#0f0f0f";

    articuloPrincipal.forEach((elemento) => {
      elemento.style.backgroundColor = "#000000";
      elemento.style.color = "#ffffff";

      elemento.style.borderRadius = "20px";
    });

    articuloPrincipalDos.forEach((elemento) => {
      elemento.style.backgroundColor = "#000000";
      elemento.style.color = "#ffffff";

      elemento.style.borderRadius = "20px";
    });

    imagenesArticulos.forEach((elemento) => {
      elemento.style.boxShadow = "0px 0px 10px 0 #fdfdfd";
    });

    header.style.boxShadow = "rgba(255,255,255,/46%) 0px 0px 13px";

    linkRedireccionar.forEach((elemento) => {
      elemento.style.outline = "2px solid #ffffff";
      elemento.classList.add("dark-mode");
      elemento.classList.remove("light-mode");
    });

    transicionOscuro();
  }
});

const preferenciasDeColor = window.matchMedia("(prefers-color-scheme: dark)");

const aplicarTema = (esOscuro) => {
  if (esOscuro) {
    // Modo Oscuro
    containerBtn.style.justifyContent = "flex-end";
    containerBtn.style.backgroundColor = "#000000";
    containerBtn.style.outline = "2px solid #ffffff";
    body.classList.add("dark-mode");
    header.classList.add("dark-mode");
    header.style.backgroundColor = "#0f0f0f";

    articuloPrincipal.forEach((elemento) => {
      elemento.style.backgroundColor = "#000000";
      elemento.style.color = "#ffffff";
      elemento.style.borderRadius = "20px";
    });

    articuloPrincipalDos.forEach((elemento) => {
      elemento.style.backgroundColor = "#000000";
      elemento.style.color = "#ffffff";
      elemento.style.borderRadius = "20px";
    });

    imagenesArticulos.forEach((elemento) => {
      elemento.style.boxShadow = "0px 0px 10px 0 #fdfdfd";
    });

    header.style.boxShadow = "rgba(255, 255, 255, 0.46) 0px 0px 13px";

    linkRedireccionar.forEach((elemento) => {
      elemento.style.outline = "2px solid #ffffff";
      elemento.classList.add("dark-mode");
    });

    transicionOscuro();
  } else {
    // Modo Claro
    containerBtn.style.backgroundColor = "#fdfdfd";
    containerBtn.style.outline = "2px solid #000000";
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    header.classList.remove("dark-mode");
    header.classList.add("light-mode");
    header.style.backgroundColor = "#fdfdfd";

    articuloPrincipal.forEach((elemento) => {
      elemento.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
      elemento.style.borderRadius = "20px";
      elemento.style.backgroundColor = "#ffdda88a";
      elemento.style.color = "#000000";
      elemento.style.outline = "none";
    });

    articuloPrincipalDos.forEach((elemento) => {
      elemento.style.backgroundColor = "#ffdda88a";
      elemento.style.color = "#000000";
      elemento.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
      elemento.style.borderRadius = "20px";
      elemento.style.outline = "none";
    });

    imagenesArticulos.forEach((elemento) => {
      elemento.style.boxShadow = "0px 0px 10px 0 #000000";
    });

    header.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";

    linkRedireccionar.forEach((elemento) => {
      elemento.style.outline = "2px solid #000000";
      elemento.classList.remove("dark-mode");
      elemento.classList.add("light-mode");
    });

    transicionClaro();
  }
};

aplicarTema(preferenciasDeColor.matches);

preferenciasDeColor.addEventListener("change", (event) => {
  aplicarTema(event.matches);
});
