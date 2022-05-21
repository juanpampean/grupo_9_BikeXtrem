window.addEventListener('load', function(){
    let formularioCreacion = this.document.querySelector('form.create-form');

    formularioCreacion.addEventListener('submit', function(e){
        console.log(e.target);
        let errores = [];

        let campoNombre = document.querySelector(input.nombre);

        if (campoNombre.value == ''){
            errores.push('Debe ingresar un nombre de producto');
        }else if (campoNombre.value.length < 5) {
            errores.push('El campo debe tener al menos 5 caracteres');
        }

        let campoDescripcion = document.querySelector('textarea.descripcion');

        if (campoDescripcion.value.length < 20) {
            errores.push('Deberá agregar más detalle a la descripción');
        }

       /* let campoImagen = document.querySelector('input.fotoProducto');

        if (campoImagen.value != (/\.(JPG|JPEG|PNG|GIF)$/i)) {
            alert('El archivo a adjuntar no es una imagen');
        }*/

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('div.errores.ul');

            for (let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += '<li>' += errores[i] + '</li>';
            }
        }
    })
})