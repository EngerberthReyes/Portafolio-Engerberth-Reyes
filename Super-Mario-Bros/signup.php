<!DOCTYPE html>
<html lang='es'>

<head>
  <meta charset='utf-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1' />
  <title>Registro de Usuario - Super Mario Bros | Descripciones</title>
  <link rel='stylesheet' type='text/css' href='Assets/CSS/styles-signup.css' />
  <link rel='shortcut icon' href='Assets/IMG/Home/icon.png' />
</head>

<body>
  <section class='container-flex'>
    <form class='container-formulario' method='POST' id='formulario'>
      <section class='container-flex_titulo'>
        <h1 class='titulo'>Registro de un Nuevo Usuario</h1>
        <section class='linea-oblicua'></section>
        <a class='link-iujo' href='https://webiujocatia.wordpress.com/' target='_blanck'>
          <img class='imagen-iujo' src='Assets/IMG/Logo/IUJO.png' />
        </a>
      </section>
      <section class='container-input'>
        <input class='input_nombre entrada_formulario' id='input-usuario' type='text' tabindex='1' name='nombre' placeholder=' ' />
        <label class='label_nombre etiqueta_entrada' for='nombre'>Introduzca su Nombre de Usuario</label>
        <section class='input-mensaje__nombre' id='input-mensaje__nombre'></section>
        <input class='clase_contrasenia entrada_formulario' id='input-contrasenia' name='contrasenia' type='password' tabindex='2' placeholder=' ' />
        <label class='label_contrasenia etiqueta_entrada' for='contrasenia'>Ingrese Una Contraseña</label>
        <input class='clase_contrasenia entrada_formulario' id='input-contrasenia_repeat' name='contraseniaRepeat' type='password' tabindex='3' placeholder=' ' />
        <label class='label_contrasenia-repetir etiqueta_entrada' for='contraseniaRepeat'>Vuelva a Ingresar Su Contraseña</label>
        <label class='ocho_caracteres' for='password'>La Contraseña Debe Ser Mayor o Igual a Ocho Caracteres.</label>
        <section id='input-mensaje__contrasenia'></section>
        <section id='input-mensaje__contrasenia'></section>
        <section id='input-mensaje__contrasenia'></section>
        <section class='container-btn'>
          <input class='btn-enviar' id='input-enviar' tabindex='4' name='registrar' type='submit' value='Registrar' />
        </section>
      </section>
      <?php

      include('procesamientoPHP.php');

      ?>
      <section class='link_registro'>
        <a class='link_directo' href='signin.php'>¿Ya Tienes Una Cuenta?, Inicie Sesión.</a>
      </section>
    </form>
  </section>
  <script type='text/javascript' src='Assets/JS/index.js'></script>
  <script type='text/javascript' src='Assets/JS/main.js'></script>
</body>

</html>