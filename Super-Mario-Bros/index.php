<!DOCTYPE html>
<html lang='es'>

<head>
  <meta charset='utf-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1' />
  <title>Super Mario Bros | Descripciones</title>
  <link rel='stylesheet' type='text/css' href='Assets/CSS/styles-index.css' />
  <link rel='shortcut icon' href='Assets/IMG/Home/icon.png' />
</head>

<body>
  <?php

  include('procesamientoPHP.php');

  ?>
  <header class='header-container'>
    <a class='link-redirecciones' href='#' target='_black'>
      <img class='imagen-header' id='imagen_header' />
    </a>
    <h1 class='titulo-header' id='titulo_header'>
      Super Mario Bros / Descripción
    </h1>
    <ul class='lista-desordenada'>
      <li class='lista'>Nombre de Usuario: <?php echo isset($_SESSION['nombre']) ? $_SESSION['nombre'] : 'Usuario';  ?></li>
      <form method="POST">
        <button type='submit' class='lista botonCerrarSesion' name='cerrarSesion'><a>Cerrar Sesión</a></button>
      </form>
      <li class='container-switch'>
        <img alt='sol.svg' type='image/svg+xml' class='sol' src='Assets/IMG/Banner/sol.svg' />
        <img alt='luna.svg' type='image/svg+xml' class='luna' src='Assets/IMG/Banner/luna.svg' />
      </li>
    </ul>
  </header>
  <main class='seccion-principal'>
    <section class='slider'>
      <section class='slider__container container'>
        <img alt='arrowleftWhite.svg' type='image/svg+xml' src='Assets/IMG/Banner/arrowleftWhite.svg' class='slider__arrow' id='beforeWhite' />
        <img alt='arrowleft.svg' type='image/svg+xml' src='Assets/IMG/Banner/arrowleft.svg' class='slider__arrow' id='beforeBlack' />
        <section class='slider__body slider__body--show'>
          <section class='slider__texts'>
            <h2>Super Mario Bros: La Historia</h2>
            <p class='slider__review'>
              Super Mario Bros es un icónico videojuego de plataformas
              desarrollado y publicado por Nintendo en 1985 para la consola de
              juegos Nintendo Entertainment System (NES). Fue creado por el
              famoso diseñador de juegos japonés Shigeru Miyamoto y el equipo
              de desarrollo de Nintendo EAD.
            </p>
          </section>
          <figure class='slider__picture'>
            <img src='Assets/IMG/Banner/Banner Super Mario Bros.png' class='slider__img' />
          </figure>
        </section>

        <section class='slider__body'>
          <section class='slider__texts'>
            <h2>Gameplay de Super Mario Bros Clásico</h2>
            <p class='slider__review'>
              Muestra de un Gameplay de Super Mario Bros.
            </p>
            <button class='btn-video' data-src='Assets/Videos/MP4/Super Mario Bros Clasico.mp4'>
              Reproducir Video
            </button>
          </section>
          <figure class='slider__video--container'>
            <video src='Assets/Videos/MP4/Super Mario Bros Clasico.mp4' class='slider__video' loop></video>
          </figure>
        </section>
        <section class='slider__body'>
          <section class='slider__texts'>
            <h2>Temática de Super Mario Bros</h2>
            <p class='slider__review'>
              La temática principal de Super Mario Bros es la aventura y la
              exploración. El juego sigue las aventuras del fontanero italiano
              Mario mientras atraviesa mundos temáticos llenos de obstáculos y
              enemigos para rescatar a la princesa Peach del malvado Bowser.
            </p>
          </section>
          <figure class='slider__picture'>
            <img alt='Salvacion.png' title='Mario Rescata a la Princesa Peache' src='Assets/IMG/Banner/Salvacion.png' class='slider__img img_salvacion' />
          </figure>
        </section>
        <img alt='arrowrightWhite.svg' type='image/svg+xml' src='Assets/IMG/Banner/arrowrightWhite.svg' class='slider__arrow' id='afterWhite' />
        <img alt='arrowright.svg' type='image/svg+xml' src='Assets/IMG/Banner/arrowright.svg' class='slider__arrow' id='afterBlack' />
      </section>
    </section>
    <h1 class='titulo-normal'>Personas Importantes en el Desarrollo de Super Mario Bros</h1>
    <section class='seccion-principal'>
      <section class='seccion-secundaria'>
        <article class='articulo-principal'>
          <img alt='Shigeru Miyamoto.png' title='Shigeru Miyamoto' class='imagen articuloimg__uno' src='Assets/IMG/Banner/Shigeru Miyamoto.png' />
        </article>
        <article class='articulo-principal articulo-principal__informacion'>
          <h1 class='titulo titulo-seccion__dos'>
            Biografía de Shigeru Miyamoto
          </h1>
          <p class='texto texto-articulo'>
            Shigeru Miyamoto nació el 16 de noviembre de 1952 en Sonobe,
            Kyoto, Japón. Es un diseñador de juegos japonés y es considerado
            uno de los diseñadores de videojuegos más influyentes y exitosos
            de todos los tiempos. Miyamoto se unió a Nintendo en 1977 como
            aprendiz de diseño gráfico. Su primera tarea fue trabajar en el
            diseño de las cajas de juegos de Nintendo, pero rápidamente se
            interesó en el diseño de juegos de video. Su primer juego
            importante fue Donkey Kong en 1981, en el que creó los personajes
            principales, incluyendo a Mario (originalmente llamado Jumpman).
          </p>
        </article>
      </section>
    </section>
    <section class='seccion-principal'>
      <section class='seccion-secundaria'>
        <article class='articulo-principal articulo-principal__informacion'>
          <h1 class='titulo titulo-seccion__dos'>
            Biografía de Takashi Tezuka
          </h1>
          <p class='texto texto-articulo'>
            Takashi Tezuka es un diseñador y director de videojuegos japonés,
            nacido el 17 de noviembre de 1960 en Osaka, Japón. Tezuka comenzó
            su carrera en Nintendo en 1984, trabajando en el diseño de
            personajes y gráficos para juegos como Excitebike y Devil World.
            En 1985, se unió al equipo de diseño de Super Mario Bros. como
            co-diseñador junto a Shigeru Miyamoto.
          </p>
        </article>
        <article class='articulo-principal articulo-principal__informacion'>
          <img alt='Takashi Tezuka.png' title='Takashi Tezuka' class='imagen articuloimg__dos' src='Assets/IMG/Banner/Takashi Tezuka.png' />
        </article>
      </section>
    </section>
    <section class='seccion-principal'>
      <section class='seccion-secundaria'>
        <article class='articulo-principal articulo-principal__informacion articulo-tres__especial'>
          <img alt='Koji Kondo.png' title='Koji Kondo' class='imagen articuloimg__tres' src='Assets/IMG/Banner/Koji Kondo.png' />
        </article>
        <article class='articulo-principal articulo-principal__informacion'>
          <h1 class='titulo titulo-seccion__dos'>Biografía de Koji Kondo</h1>
          <p class='texto texto-articulo'>
            Koji Kondo es un compositor y músico japonés, nacido el 13 de
            agosto de 1960 en Nagoya, Japón. Es conocido por su trabajo como
            compositor de música para videojuegos, especialmente por su
            trabajo en la serie de videojuegos 'Super Mario Bros.' y 'The
            Legend of Zelda'. Kondo comenzó a estudiar música en la
            Universidad de Artes de Osaka, donde se especializó en composición
            y piano. Después de graduarse, comenzó a trabajar en la compañía
            de videojuegos Nintendo en 1984, donde trabajó en la composición
            de música para algunos de los primeros videojuegos de la compañía.
            Uno de los primeros trabajos de Kondo en Nintendo fue la
            composición de la música para el juego 'Super Mario Bros.' en
            1985. La icónica música del juego, incluyendo la canción del tema
            principal y la música del nivel, se convirtió en un éxito
            instantáneo y ha sido reconocida como una de las mejores
            partituras de videojuegos de todos los tiempos.
          </p>
        </article>
      </section>
    </section>
  </main>
  <a class='link_redireccionamiento' href='game.html' target='_blanck'>
    Jugar Super Mario Bros
  </a>
  <section id='flecha' class='flecha'>
    <img class='flechaUp-svg' alt='arrowright.svg' type='image/svg+xml' src='Assets/IMG/Banner/arrowright.svg'>
  </section>
  <footer class='pie-pagina'>
    <p class='texto-pie-pagina'>Engerberth Reyes. C.I: 30.434.485, Albert Mora (NT). C.I: NT. Ivonne Pinzón (NT). C.I: NT. Gabriel Cadenas (NT). C.I: NT. <br /> &copy; Todos Los Derechos Reservados 2023.</p>
  </footer>
  <script type='text/javascript' src='Assets/JS/main-home.js'></script>
</body>

</html>