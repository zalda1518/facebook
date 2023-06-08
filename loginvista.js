const btnclick = document.getElementById("entrar");
btnclick.addEventListener("click", fnx1)


function fnx1() {
    const correo1 = document.getElementById("correo").value;
    const clave1 = document.getElementById("clave").value;
    localcorreo = localStorage.getItem("correousuario");
    localclave = localStorage.getItem("claveusuario");

    if (correo1 == "" || clave1 == "") {

        alert("por favor ingrese sus credenciales primero");
        return false;
    }

    else if (correo1 == localcorreo && clave1 == localclave) {

        validacioniniciado = localStorage.setItem("iniciado", "si");

        alert("iniciando sesion");
        location.href = "https://www.facebook.com/";
        return false;
    }
    else {
        alert("usuario no registrado o esta mal escrito");
    }
}
    

 






