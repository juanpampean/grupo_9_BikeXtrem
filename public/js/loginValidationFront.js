window.onload = function() {
    let boton = document.querySelector(".form ");

    let mail = document.querySelector("#email");
    let clave = document.querySelector("#clave")
    mail.focus();

    boton.addEventListener("submit", function(e) {
        let errores = [];
        if (mail.value == "") {
            errores.push("El campo de email está vacío")
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(mail)) {
            alert("La dirección de email " + mail + " es correcta.");
        } else {
            alert("La dirección de email es incorrecta.");
        }
        if (clave.value.length < 8) {
            errores.push("El campo Contraseña debe tener al menos 8 carácteres")
        } else {}


        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector(".errores");
            ulErrores.innerHTML = "";
            errores.forEach(function(error) {
                ulErrores.innerHTML += "<li>" + error + "</li>"
            })
            console.log(ulErrores)
            ulErrores.style.color = "red";
        } else {
            alert("Usuario Logueado Satisfactoriamente")
        }

    })
}