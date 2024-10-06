'use strict';

const beforeBtn = document.getElementById('beforeBlack');
const afterBtn = document.getElementById('afterBlack');
const sliderBody = document.querySelectorAll('.slider__body');
const video = document.querySelector('.slider__video');
const button = document.querySelector('.btn-video');

let dispositivasAutomaticas;

function avanzar() {
  dispositivasAutomaticas = setInterval(() => {
    manejarClickSiguiente();
  }, 10000);
}

avanzar();

function detener() {
  clearInterval(dispositivasAutomaticas);
}

let isPlaying = false;

button.addEventListener('click', () => {
  // obtiene la url del video, dataset funciona como e utilizan para almacenar
  // información personalizada en un elemento HTML
  const videoSrc = button.dataset.src;
  const video = document.querySelector('.slider__video');
  // obtiene la url del video y sera nuevamente la direccion del video, es como un refrescamiento.
  video.src = videoSrc;
  video.setAttribute('loop', true);

  if (isPlaying) {
    video.pause();
    isPlaying = false;

    button.innerText = 'Reproducir Video';
    avanzar();
  } else {
    video.play();
    isPlaying = true;

    button.innerText = 'Detener Video';
    detener();
  }
});

let slideIndex = 0;

function manejarClickAnterior() {
  sliderBody[slideIndex].classList.remove('slider__body--show');
  sliderBody[slideIndex].style.opacity = '0';
  if (slideIndex === 0) {
    slideIndex = sliderBody.length - 1;
  } else {
    slideIndex--;
  }
  sliderBody[slideIndex].classList.add('slider__body--show');
  sliderBody[slideIndex].style.opacity = '1';
}

function manejarClickSiguiente() {
  sliderBody[slideIndex].classList.remove('slider__body--show');
  sliderBody[slideIndex].style.opacity = '0';
  if (slideIndex === sliderBody.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  sliderBody[slideIndex].classList.add('slider__body--show');
  sliderBody[slideIndex].style.opacity = '1';
}
beforeBtn.addEventListener('click', manejarClickAnterior);
afterBtn.addEventListener('click', manejarClickSiguiente);

const containerBtn = document.querySelector('.container-switch');
const sliderTexts = document.querySelectorAll('.slider__texts');
const sliderImg = document.querySelectorAll('.slider__img');
const lista = document.querySelectorAll('.lista');
const body = document.body;
const linkRedireccionar = document.querySelector('.link_redireccionamiento');
const links = document.querySelectorAll('a');
const articuloPrincipal = document.querySelectorAll('.articulo-principal');
const articuloPrincipalDos = document.querySelectorAll('.articulo-principal__informacion');
const header = document.querySelector('.header-container');
const btnWhite = document.querySelector('.luna');
const btnBlack = document.querySelector('.sol');
const sliderVideo = document.querySelector('.slider__video');
const imagenesArticulos = document.querySelectorAll('.imagen');

containerBtn.style.justifyContent = 'flex-start';
containerBtn.style.backgroundColor = '#fdfdfd';

beforeBtn.style.opacity = '0';
afterBtn.style.opacity = '1';
containerBtn.style.outline = '4px solid #000000';
body.classList.add('light-mode');
header.classList.add('light-mode');
header.style.backgroundColor = '#fdfdfd';
linkRedireccionar.classList.add('light-mode');
articuloPrincipal.forEach((elemento) => {
  elemento.classList.add('light-mode');
});

function transition() {
  btnWhite.style.opacity = '1';
  btnWhite.style.transform = 'translateX(0)';
  btnBlack.style.opacity = '0';
  btnBlack.style.transform = 'translateX(100px)';
  setTimeout(() => {
    btnWhite.style.opacity = '0';
    btnWhite.style.transform = 'translateX(0)';
    btnBlack.style.opacity = '1';
    btnBlack.style.transform = 'translateX(0)';
  }, 1500);
}

transition();
beforeBtn.style.opacity = '1';
afterBtn.style.opacity = '1';
sliderTexts.forEach((elemento) => {
  elemento.classList.add('light-mode');
  elemento.style.backgroundColor = '#ffffff';
  elemento.style.borderRadius = '15px';
  elemento.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 18)';
  elemento.style.outline = '4px solid #000000';
});
lista.forEach((elemento) => {
  elemento.classList.add('light-mode');
  elemento.style.outline = '4px solid #000000';
});

const flecha = document.getElementById('flecha');

flecha.style.opacity = '0';

window.addEventListener('scroll', () => {
  if (scrollY >= 392) {
    flecha.style.opacity = '1';
    flecha.style.transform = 'translateY(0px)'
  } else {
    flecha.style.opacity = '0';
    flecha.style.transform = 'translateY(70px)'
  }
});

flecha.addEventListener('click', () => {
  scrollTo(0, -scrollY);
});

containerBtn.addEventListener('click', () => {
  const btnEstiloActual = getComputedStyle(containerBtn).backgroundColor === 'rgb(253, 253, 253)' ? true : false;
  //Modo Oscuro
  if (btnEstiloActual) {
    containerBtn.style.backgroundColor = '#000000';
    containerBtn.style.outline = '4px solid #ffffff';
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    header.classList.add('dark-mode');
    header.classList.remove('light-mode');
    header.style.backgroundColor = '#0f0f0f';

    articuloPrincipal.forEach((elemento) => {
      elemento.style.backgroundColor = '#000000';
      elemento.style.color = '#ffffff';
      elemento.style.outline = '4px solid #ffffff';
      elemento.style.borderRadius = '20px';
    });
    articuloPrincipalDos.forEach((elemento) => {
      elemento.style.backgroundColor = '#000000';
      elemento.style.color = '#ffffff';
      elemento.style.outline = '4px solid #ffffff';
      elemento.style.borderRadius = '20px';
    });

    imagenesArticulos.forEach((elemento) => {
      elemento.style.boxShadow = '0px 0px 10px 0 #fdfdfd';
    });

    linkRedireccionar.classList.add('dark-mode');
    linkRedireccionar.classList.remove('light-mode');

    beforeBtn.style.opacity = '0';
    afterBtn.style.opacity = '0';
    sliderVideo.style.boxShadow = 'rgba(255 255 255 / 76%) 0px 0px 13px 0px';
    header.style.boxShadow = 'rgba(255 255 255 / 46%) 0px 0px 13px 0px';
    button.style.outline = '4px solid #fdfdfd';
    linkRedireccionar.style.outline = '4px solid #ffffff';
    sliderTexts.forEach((elemento) => {
      elemento.classList.add('dark-mode');
      elemento.classList.remove('light-mode');
      elemento.style.backgroundColor = '#000000';
      elemento.style.color = '#ffffff';
      elemento.style.borderRadius = '15px';
      elemento.style.outline = '4px solid #ffffff';
    });
    lista.forEach((elemento) => {
      elemento.classList.add('dark-mode');
      elemento.classList.remove('light-mode');
      elemento.style.outline = '4px solid #ffffff';
    });
    sliderImg.forEach((elemento) => {
      elemento.classList.add('dark-mode');
      elemento.classList.remove('light-mode');
      elemento.style.boxShadow = 'rgba(255 255 255 / 76%) 0px 0px 13px 0px';
    });
        function transition() {
      btnWhite.style.opacity = '0';
      btnWhite.style.transform = 'translateX(0px)';
      btnBlack.style.opacity = '1';
      btnBlack.style.transform = 'translateX(0)';
      setTimeout(() => {
        btnWhite.style.opacity = '1';
        btnWhite.style.transform = 'translateX(50px)';
        btnBlack.style.opacity = '0';
        btnBlack.style.transform = 'translateX(67px)';
      }, 200);
    }

    transition();
  } else {
    //Modo Claro
    containerBtn.style.backgroundColor = '#fdfdfd';
    beforeBtn.style.opacity = '1';
    afterBtn.style.opacity = '1';
    sliderVideo.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    articuloPrincipal.forEach((elemento) => {
      elemento.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
      elemento.style.borderRadius = '20px';
      elemento.style.backgroundColor = '#e4f6b6';
      elemento.style.color = '#000000';
      elemento.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
      elemento.style.borderRadius = '20px';
      elemento.style.color = '#000000';
      elemento.style.backgroundColor = '#e4f6b6';
      elemento.style.outline = 'none';
    });
    articuloPrincipalDos.forEach((elemento) => {
      elemento.style.backgroundColor = '#e4f6b6';
      elemento.style.color = '#000000';
      elemento.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
      elemento.style.borderRadius = '20px';
      elemento.style.outline = 'none';
    });
    imagenesArticulos.forEach((elemento) => {
      elemento.style.boxShadow = '0px 0px 10px 0 #000000';
    });

    containerBtn.style.outline = '4px solid #000000';

    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    header.style.backgroundColor = '#fdfdfd';

    header.classList.remove('dark-mode');
    header.classList.add('light-mode');
    linkRedireccionar.style.outline = '4px solid #000000';
    button.style.outline = '4px solid #000000';
    header.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    sliderTexts.forEach((elemento) => {
      elemento.classList.remove('dark-mode');
      elemento.classList.add('light-mode');
      elemento.style.backgroundColor = '#fdfdfd';
      elemento.style.color = '#000000';
      elemento.style.borderRadius = '15px';
      elemento.style.outline = '4px solid #000000';
      elemento.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 18)';
    });
    sliderImg.forEach((elemento) => {
      elemento.classList.add('dark-mode');
      elemento.classList.remove('light-mode');
      elemento.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    });
    lista.forEach((elemento) => {
      elemento.classList.add('light-mode');
      elemento.classList.remove('dark-mode');
      elemento.style.outline = '4px solid #000000';
    });

function transition() {
  btnWhite.style.opacity = '1';
  btnWhite.style.transform = 'translateX(50px)';
  btnBlack.style.opacity = '0';
  btnBlack.style.transform = 'translateX(57px)';
  setTimeout(() => {
    btnWhite.style.opacity = '0';
    btnWhite.style.transform = 'translateX(17px)';
    btnBlack.style.opacity = '1';
    btnBlack.style.transform = 'translateX(0)';
  }, 200);
}

transition();
}
});