const datos = [];
const registro = document.getElementById("registrar");
const cerrar = document.getElementById("cerrar");
cerrar.addEventListener("click", () => {
     window.location.href = "loginvista.html";
});

registro.addEventListener("click", validar);
function validar() {
     let nombre = document.getElementById("nombre").value;
     let telefono = document.getElementById("telefono").value;
     let correo = document.getElementById("correo").value;
     let clave = document.getElementById("clave").value;

     if (nombre == "" || telefono == ""  || correo == "" || clave == "") {
          alert("todos los campos son requeridos para poder registrarte");
     }

     else {
          alert("Registro Exitoso");
          const aggdata = datos.push(nombre, telefono, correo, clave);

          localname = localStorage.setItem("nombreusuario", nombre);
          localtelefono = localStorage.setItem("telefonousuario", telefono);
          localcorreo = localStorage.setItem("correousuario", correo);
          localclave = localStorage.setItem("claveusuario", clave);
          localiniciado = localStorage.setItem("iniciado", "");

          window.location.href = "loginvista.html";

          console.log(datos);

     }

}







