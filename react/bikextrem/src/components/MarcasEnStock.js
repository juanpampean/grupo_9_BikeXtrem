import React, {useState, useEffect } from 'react'
import CardMarcasStock from "./CardMarcasStock"

function MarcasEnStock () {
    let [proveedores,setProveedor] = useState("No dispone");

    useEffect(() => {
        fetch("http://localhost:3001/api/totalproducts")
        .then(resultado => resultado.json())
        .then(data => {
            setProveedor(data.meta.proveedores)
        })
    })

    return (
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
            </div>
            <div className="card-body">
                <div className="row">
                   {proveedores.map((dato,i)=>
                   <CardMarcasStock key={i}
                       marca={dato.nombre}
                       />
                   )}
                </div>
            </div>
        </div>
    </div>
    )
}

export default MarcasEnStock