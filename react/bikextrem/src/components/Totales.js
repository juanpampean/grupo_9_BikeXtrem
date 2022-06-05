
import React, { useState, useEffect } from "react";
import CardTotales from "./CardTotales";

function ContentRowMovies() {
    let [products, setProducts] = useState("No dispone");
    let [users, setUsers] = useState("Sin usuarios");
    let [suppliers, setMarcas] = useState("No dispone")
    let [categories, setCategory] = useState("No dispone")
    let [totalstock,setStock] =useState("no dispone")

    let datos = [
        {
            titulo: "Modelos en Stock",
            cifra: products,
            colorBorder: "primary",
            icono: "fa-clipboard-list"
        },

        {
            titulo: "Usuarios Registrados",
            cifra: users,
            colorBorder: "warning",
            icono: "fa-user-check"
        },
        {
            titulo: "Marcas en Stock",
            cifra: suppliers,
            colorBorder: "success",
            icono: "fa-dollar-sign"
        },
        {
            titulo: "Total Categorías",
            cifra: categories,
            colorBorder: "warning",
            icono: "fa-user-check"
        },
        {
            titulo: "Stock Total",
            cifra: totalstock,
            colorBorder: "warning",
            icono: "fa-user-check"
        }
    ]
    
    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then(resultado => resultado.json())
        .then(dataProduct => {
            setProducts(dataProduct.meta.TotalModelos)
        })

        fetch("http://localhost:3001/api/users")
        .then(resultado => resultado.json())
        .then(dataUser => {
            setUsers(dataUser.meta.total)
        })

        fetch("http://localhost:3001/api/suppliers")
        .then(resultado => resultado.json())
        .then(dataSupp => {
            setMarcas(dataSupp.meta.total_suppliers)
        })

        fetch("http://localhost:3001/api/categories")
        .then(resultado => resultado.json())
        .then(dataCat => {
            setCategory(dataCat.meta.total_categories)
        })

        fetch("http://localhost:3001/api/totalproducts")
        .then(resultado => resultado.json())
        .then(dataCat => {
            setStock(dataCat.meta.stocktotal)
        })

   }, [])


    return (					
        <div className="row">
        {datos.map((dato, i) => 
            <CardTotales key={i} 
                titulo={dato.titulo} 
                cifra={dato.cifra}
                colorBorder={dato.colorBorder}
                icono={dato.icono}
            /> 
        )}
    </div>
    )
}

export default ContentRowMovies