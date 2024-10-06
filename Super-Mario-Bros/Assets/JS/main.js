'use strict';

// Obtiene el elemento del formulario y la expresión regular para validar el formulario.

const form = document.getElementById('formulario');

const pattern = /[a-z]|[A-Z]/;

// Agrega un evento de envío al formulario

form.addEventListener('submit', (event) => {

  // Función para mostrar mensajes de error en la interfaz

  const mostrarMensaje = (elementoAgregar, tipodeErrorPorClase, mostrarMensaje) => {

    // Verifica si el mensaje de error ya existe en el elemento.

    if (!elementoAgregar.querySelector(tipodeErrorPorClase)) {

      // Agrega el mensaje de error al elemento.

      elementoAgregar.appendChild(mostrarMensaje);

      // Eliminar el mensaje de error después de 2 segundos

      setTimeout(() => {elementoAgregar.removeChild(mostrarMensaje)}, 2000);
    };
  };

  // Valida los campos del formulario y mostrar mensajes de error apropiados.

if ((!contrasenia.value || !pattern.test(contrasenia.value)) && (!nombre.value || !pattern.test(nombre.value))) {

  // Verifica si se ingresaron valores vacíos o no alfabéticos para los campos de nombre y contraseña
  
  // Si hay un problema, agregar un mensaje de error al formulario
  
  event.preventDefault();
  mostrarMensaje(
    mensajeNombre,
    '.container-error_ambosCampos',
    ambosCamposVacios
  );
}

else if (!nombre.value) {

  // Verifica si no se ingresó un nombre
  
  // Si hay un problema, agregar un mensaje de error al formulario
  event.preventDefault();
  mostrarMensaje(
    mensajeNombre,
    '.container-error_nombre',
    mensajeNombreAgregado
  );
}

else if (contrasenia.value.trim().length < 8) {

  // Verifica si la contraseña tiene menos de 8 caracteres

  // Si hay un problema, agregar un mensaje de error al formulario

  event.preventDefault();
  mostrarMensaje(
    mensajeContrasenia,
    '.container-error_contrasenia',
    mensajeNombreAgregadoOchoCaracteres
  );
}

else if (!contrasenia.value) {

  // Verifica si no se ingresó una contraseña

  // Si hay un problema, agregar un mensaje de error al formulario

  event.preventDefault();
  mostrarMensaje(
    mensajeContrasenia,
    '.container-error_contrasenia',
    mensajeContraseniaAgregado
  );
}

else if (contrasenia.value !== contraseniaRepeat.value) {

  // Verifica si las contraseñas no coinciden

  // Si hay un problema, agregar un mensaje de error al formulario

  event.preventDefault();
  mostrarMensaje(
    mensajeContrasenia,
    '.mensaje-error-contrasenia_repeat',
    contraseniaRepeatMensaje
  );
}

});