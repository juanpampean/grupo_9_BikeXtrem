import React, {useState, useEffect} from "react";

import CardProduct from "./CardProduct";

function LastProductInDb () {
    let [product,setProduct] = useState("no state")

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then(res=>res.json())
        .then(dat=>{
            setProduct({
            nombre_producto:dat.meta.products[0].nombre,
            imagen_producto:dat.meta.products[0].imagen,
            descripcion:dat.meta.products[0].descripcion,
            id:dat.meta.products[0].id

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