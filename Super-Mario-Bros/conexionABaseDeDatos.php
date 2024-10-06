<?php

// Establecer la conexión a la base de datos MySQL utilizando la extensión MySQLi
$conexion = mysqli_connect('localhost', 'root', '', 'registro');

// Verificar si la conexión a la base de datos fue exitosa o no

if (!$conexion) {

  // Si la conexión falla, mostrar un mensaje de error y finalizar la ejecución del script con la función die()

  die('Error al conectarse a la base de datos: ' . mysqli_connect_error());
}

// Si la conexión es exitosa, el objeto de conexión se puede utilizar para realizar consultas a la base de datos
?>