window.onload = function() {
    let correo = document.getElementById('email');
    let clave = document.getElementById('clave');
    let boton = document.querySelector('boton1');

    //Login de usuarios
    let email = prompt('Ingrese su email');
    console.log(email);
    if (email = '') {
        correo.innerHTML = "Coloque su email ";
    } else {
        correo.innerHTML += email;
    };


    let contraseña = prompt('Ingrese su Contraseña');
    console.log(contraseña);
    if (contraseña = '') {
        clave.innerHTML = "Coloque su contraseña ";
    } else {
        clave.innerHTML += contraseña;
    };

    boton.addEventListener("click", function(e) {
        e.preventDefault();
        alert("Ingresa email y Contraseña");
    });
}