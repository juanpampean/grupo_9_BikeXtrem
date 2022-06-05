import React from "react";



function CardProduct({nombre_producto,imagen_producto,descripcion_producto}){
    return(
        <div className="card-body">
        <h2>{nombre_producto}</h2>    
        <div className="text-center">
            
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"40rem"}} src={imagen_producto} alt=" Star Wars - Mandalorian " />
        </div>
        <p>{descripcion_producto}</p>
        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
    </div>
    )
}

export default CardProduct