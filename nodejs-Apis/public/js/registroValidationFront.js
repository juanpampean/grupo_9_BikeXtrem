window.onload = function() {
    const formulario = document.querySelector("form.registro_usuarios");

    let errores = [];

    let Nombre = document.querySelector('h2');
    Nombre.style.color = "red"


    //Evento para el boton al hacer submit
    formulario.addEventListener('submit', function(e) {

        let Nombre = document.querySelector('#nombre');
        if (Nombre.value == '') {
            errores.push('Debe ingresar un nombre valido');
        } else if (Nombre.value.length < 2) {
            errores.push('El campo debe tener al menos 2 caracteres');
        };

        let Email = document.querySelector('#email');
        if (Email.value == '') {
            errores.push('Debe ingresar un Email');
        }
        let contraseña = document.querySelector('#password');
        if (contraseña.value == '') {
            errores.push('Debe ingresar una contraseña valida');
        } else if (contraseña.value.length < 8) {
            errores.push('El campo debe tener al menos 8 caracteres');
        };

        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector(".errores");
            ulErrores.innerHTML = "";
            errores.forEach(function(error) {
                ulErrores.innerHTML += "<li>" + error + "</li>"
            })
            console.log(ulErrores)
        } else {}

    })

    function fileValidation() {
        const fileInput = document.getElementById('avatar');
        const filePath = avatarInput.value;
        const extensionesPermitidas = /(.jpg|.jpeg|.png|.gif)$/i;

        if (!extensionesPermitidas.exec(filePath)) {
            errores.push('Tipo de imagen no valida, las extensiones permitidas son las siguientes: .jpeg/.jpg/.png/.gif');
            fileInput.value = '';
            return false;
        } else {
            if (fileInput.files && fileInput.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('imagePreview').innerHTML = '<img src="' + e.target.result + '"/>';
                };
                reader.readAsDataURL(fileInput.files[0]);
            }
        }
    }
}