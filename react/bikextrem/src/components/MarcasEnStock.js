import React, {useState, useEffect } from 'react'
import CardMarcasStock from "./CardMarcasStock"

function MarcasEnStock () {
    let [proveedores,setProveedor] = useState([{Proveedor:"Ningún Proveedor"}]);

    useEffect(() => {
        fetch("http://localhost:3001/api/totalproducts")
        .then(resultado => resultado.json())
        .then(data => {
            setProveedor(data.meta.proveedores)
        })
    },[])

    return (
    <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Stock de Bicis según Marca</h5>
            </div>
                <div className="card-body">
                     <div className="row">
                   {proveedores.map((dato,i)=>
                   <CardMarcasStock key={i}
                       marca={dato.Proveedor} cantidad={dato.Stock}
                       />
                   )}
                    </div>
                 </div>
             </div>
    </div>
    )
}

export default MarcasEnStock