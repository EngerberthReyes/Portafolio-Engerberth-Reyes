<?php
// Iniciar una sesión de PHP
session_start();

// Incluir el archivo de conexión a la base de datos
include('conexionABaseDeDatos.php');

// Si el usuario ha enviado un formulario de registro
if (isset($_POST['registrar'])) {
  // Sanitizar los datos del formulario
  $nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
  $contrasenia = mysqli_real_escape_string($conexion, $_POST['contrasenia']);
  $fechaRegistro = date('Y-m-d H:i:s');

  // Verificar si el nombre de usuario ya existe
  $consulta_existencia = "SELECT * FROM datosdeusuario WHERE Name='$nombre'";
  $resultado_existencia = mysqli_query($conexion, $consulta_existencia);
  if (mysqli_num_rows($resultado_existencia) > 0) {
    // Si el nombre de usuario ya existe, mostrar un mensaje de error y redirigir al usuario a la página de registro
    echo '<p class="container-mensajes_erroneo">El Nombre de Usuario Introducido Ya Ha Sido Registrado</p>';
    echo '<script>setTimeout(function() { window.location.href = "signup.php"; }, 3500);</script>';
    exit; // detener la ejecución del código si se encuentra un nombre de usuario duplicado
  }

  // Insertar los datos del nuevo usuario en la base de datos
  $consulta = "INSERT INTO datosdeusuario (Id, Name, Password, FechadeRegistro) VALUES (NULL, '$nombre', '$contrasenia', '$fechaRegistro')";
  $resultado = mysqli_query($conexion, $consulta);
  if ($resultado) {
    // Mostrar un mensaje de éxito y redirigir al usuario a la página de inicio de sesión
    echo "<p class='container-mensajes_exitoso'>Registrado Exitosamente</p>";
    echo '<script>setTimeout(function() { window.location.href = "signin.php"; }, 3500);</script>';
  } else {
    // Si no se puede registrar al usuario, mostrar un mensaje de error y redirigir al usuario a la página de registro
    echo "<p class='container-mensajes_erroneo'>No se ha Podido Registrar el Usuario</p>";
    echo '<script>setTimeout(function() { window.location.href = "signup.php"; }, 3500);</script>';
  }
}

// Si el usuario ha enviado un formulario de inicio de sesión
if (isset($_POST['ingresar'])) {
  // Sanitizar los datos del formulario
  $nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
  $contrasenia = mysqli_real_escape_string($conexion, $_POST['contrasenia']);

  // Verificar si las credenciales del usuario son válidas
  $consulta_credenciales = "SELECT * FROM datosdeusuario WHERE Name='$nombre' AND Password='$contrasenia'";
  $resultado_credenciales = mysqli_query($conexion, $consulta_credenciales);
  if (mysqli_num_rows($resultado_credenciales) > 0) {
    // Si las credenciales son válidas, establecer una variable de sesión y redirigir al usuario a la página de inicio
    $_SESSION['nombre'] = $nombre;
    header('location: index.php');
    exit(); // detener la ejecución del código después de redirigir al usuario
  } else {
    // Si las credenciales son inválidas, mostrar un mensaje de error y redirigir al usuario a la página de inicio de sesión
    echo '<p class="container-mensajes_erroneo">Nombre o Contraseña Incorrectos</p>';
    echo '<script>setTimeout(function() { window.location.href = "signin.php"; }, 3500);</script>';
    exit(); // detener la ejecución del código después de redirigir al usuario
  }
}

// Si el usuario ha enviado un formulario de cierre de sesión
if (isset($_POST['cerrarSesion'])) {
  // Eliminar todas las variables de sesión y destruir la sesión
  session_unset();
  session_destroy();
  header('location: signin.php'); // redirigir al usuario a la página de inicio de sesión
  exit(); // detener la ejecución del código después de redirigir al usuario
}
?>