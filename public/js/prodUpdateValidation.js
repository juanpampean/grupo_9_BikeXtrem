
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
        } else{}
        if (nombre.value.length <5){
            errores.push("El campo de nombre debe tener al menos 5 carácteres")
        } else{}
        if (descripcion.value.length <20){
            errores.push("El campo Descripción debe tener al menos 20 carácteres")
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
