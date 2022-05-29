const formulario = document.getElementById('create-form');
//const inputs = document.querySelectorAll('#create-form .input');

/*const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
} */



//Evento para el boton al hacer submit
formulario.addEventListener('submit', function(e){
    
let errores = [];

let ulErrores = document.querySelector('.errores');
ulErrores.innerHTML = '';

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

        
        //console.log(errores);
        //console.log(ulErrores);

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

    let errores_img = '';
    let ulErrores = document.querySelector('.errores');
    ulErrores.innerHTML = '';

    const fileInput = document.getElementById('file');
    const filePath = fileInput.value;
    const extensionesPermitidas = /(.jpg|.jpeg|.png|.gif)$/i;

    if (!extensionesPermitidas.exec(filePath)){
        errores_img = 'Tipo de imagen no valida, las extensiones permitidas son las siguientes: .jpeg/.jpg/.png/.gif';
        ulErrores.innerHTML += '<li>' + errores_img + '</li>';
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