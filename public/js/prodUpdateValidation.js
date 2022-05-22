const { format } = require("bytes");

window.onload = function(){
    let titulo = document.querySelector("h2");
    
    titulo.style.color="red"

    nombre.focus()

    form.addEventListener("submit",function(e){
        let errores = [];
        if (nombre.value == ""){
            errores.push('El campo nombre está vacío')
        }

        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector(".errores");
            console.log(ulErrores)
            ulErrores.innerHTML = "";
            console.log(ulErrores)
            errores.forEach(function(error){
                ulErrores.innerHTML += "<li>" + error +  "</li>"
            })
            console.log(ulErrores)
        }else{
            alert("La pelicula se guardo satisfactoriamente")

        }
    })

    

}