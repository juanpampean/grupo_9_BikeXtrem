const formulario = document.getElementById('create-form');
//const inputs = document.querySelectorAll('#create-form .input');

/*const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
} */

let errores = [];

//Evento para el boton al hacer submit
formulario.addEventListener('submit', function(e){
    //console.log(e.target);
    

    let campoNombre = document.querySelector('#nombre');

        if (campoNombre.value == ''){
            errores.push('Debe ingresar un nombre de producto');
        }else if (campoNombre.value.length < 5) {
            errores.push('El campo debe tener al menos 5 caracteres');
        }

    let campoDescripcion = document.querySelector('#descripcion');

        if (campoDescripcion.value.length < 20) {
            errores.push('Deberá agregar más detalle a la descripción');
        }

    //Array de errores
    if (errores.length > 0) {
        e.preventDefault();

        let ulErrores = document.querySelector('.errores');

        for (let i = 0; i < errores.length; i++){
            ulErrores.innerHTML += '<li>' + errores[i] + '</li>';
        }
        console.log(ulErrores);
        } else {
            alert('El producto fue creado satirfactoriamente');
        }

});

//validar imagen
function fileValidation(){
    const fileInput = document.getElementById('file');
    const filePath = fileInput.value;
    const extensionesPermitidas = /(.jpg|.jpeg|.png|.gif)$/i;

    if (!extensionesPermitidas.exec(filePath)){
        errores.push('Tipo de imagen no valida, las extensiones permitidas son las siguientes: .jpeg/.jpg/.png/.gif');
        fileInput.value = '';
        return false;
    } else {
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }

    }
};

