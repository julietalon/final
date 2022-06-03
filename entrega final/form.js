document.addEventListener("DomContentLoaded", function () {
    document.getElementById("formulario").addEventListener(submit, Validarformulario);
});
  function Validarformulario(evento) {
      evento.preventDefault ();
      var nombre= document.getElementById (nombre);
      if (nombre.lenght == 0) {
          alert ("no has escrito nada en el usuario");
          return;
      }
      var correo = document.getElementById (correo);
      if (correo.lenght == 0) {
          alert ("no has escrito nada en el correo")
          return;
      }
      var telefono = document.getElementById (telefono);
      if (telefono.lenght < 6) {
          alert ("lo sentimos, el numero ingresado no es valido")
      }
      var mensaje = document.getElementById (mensaje);
      if (mensaje.lenght < 15 ) {
          alert ("debes completar la casilla final")
      }
      this.submit ();
  }
