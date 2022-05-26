window.onload = function() {
    let ingreso = document.querySelector("h4");
    ingreso.style.color = "blue"

    let boton = document.querySelector(".form ");
    boton.style.backgroundColor = "LightBlue";


    //Evento para el boton al hacer submit
    boton.addEventListener("submit", function(e) {
        let errores = [];
        //Valido que el correo no esté vacío
        let correo = document.querySelector("#email");
        if (correo.value == "") {
            errores.push("El campo de email está vacío")
        } else {

        };

        //Validaciones Campo Contraseña
        let clave = document.querySelector("#clave");
        if (clave.value.length < 8) {
            errores.push("El campo contraseña debe tener al menos 8 carácteres")
        } else {};
    });

    //Mostrando Errores
    if (errores.length > 0) {
        e.preventDefault();
        let ulErrores = document.querySelector('.errores');
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += '<li>' + errores[i] + '</li>';
        }
        ulErrores.style.color = "red"
        console.log(ulErrores);
    } else {
        alert('Usuario Logueado Satisfactoriamente');
    }
};