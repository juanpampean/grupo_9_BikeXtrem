
window.onload = function(){
    let titulo = document.querySelector("h2");
    
    titulo.style.color="red"

    let nombre = document.querySelector("#nombre");
    let form = document.querySelector(".form")
    let descripcion = document.querySelector("#descripcion")
    nombre.focus();

    form.addEventListener("submit", function(e){
        let errores = [];
        if (nombre.value == ""){
            errores.push("El campo de título está vacío")
        } else if (nombre.value.length <5){
            errores.push("El campo de nombre debe tener al menos 5 carácteres")
        } else{}
        if (descripcion.value.length <20){
            errores.push("El campo Descripción debe tener al menos  carácteres")
        } else{} 



        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector(".errores");
            ulErrores.innerHTML = "";
            errores.forEach(function(error){
                ulErrores.innerHTML += "<li>" + error +  "</li>"
            })
            console.log(ulErrores)
        }else{
            alert("El producto se editó satisfactoriamente")
        }
    
    })
}

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
