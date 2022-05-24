window.onload = function() {

    let ingreso = document.querySelector("h4");
    ingreso.style.color = "blue"

    let correo = document.querySelector("#email");
    let clave = document.querySelector("#clave");
    let boton = document.querySelector(".form ");

    let errores = [];

    boton.style.backgroundColor = "Red";

    boton.addEventListener("submit", function(e) {

        if (correo.value == "") {
            errores.push("El campo de email está vacío")
        } else {}

        if (clave.value.length < 4) {
            errores.push("El campo contraseña debe tener al menos 4 carácteres")
        } else {}
        if (errores.length > 0) {
            e.preventDefault();
            alert("Ingresa email y Contraseña");
        }

    })
}