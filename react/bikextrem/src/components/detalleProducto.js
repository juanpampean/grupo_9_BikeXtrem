import React, {useState, useEffect} from "react";

import CardProduct from "./CardProduct";

function LastProductInDb () {
    let [product,setProduct] = useState("no state")

    useEffect(() => {
        fetch("http://localhost:3000/api/products/:id")
        .then(res=>res.json())
        .then(dat=>{
            setProduct({
                
        })
        })
    })

    return (
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                    Last product in Data Dase
                </h6>
            </div>
        <CardProduct 
            nombre_producto={product.nombre_producto} imagen_producto={product.imagen_producto}
            descripcion_producto={product.descripcion}
        />
        </div>
    </div>
    )
}

export default LastProductInDb