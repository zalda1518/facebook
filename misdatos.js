window.addEventListener("load",fn1);

function fn1(){
    
    name2 = localStorage.getItem("nombreusuario");
    telefono2 = localStorage.getItem("telefonousuario");
    ciudad2 = localStorage.getItem("ciudadusuario");
    correo2 = localStorage.getItem("correousuario");
    clave2 = localStorage.getItem("claveusuario");
    
    let name1 = document.getElementById("nombred").innerHTML=name2;
    let telefono1 = document.getElementById("telefonod").innerHTML=telefono2;
    let ciudad1 = document.getElementById("ciudadd").innerHTML=ciudad2;
    let correo1 = document.getElementById("correod").innerHTML=correo2;
    let clave1 = document.getElementById("claved").innerHTML=clave2;

    fn2();
    
}

function fn2(){
    let login = document.getElementById("login");
    login.addEventListener("click",borrar);
    function borrar(){
      
     //   let borrarcache = localStorage.clear();
    }
}