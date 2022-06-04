
import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRowMovies() {
    let [products, setProducts] = useState("No dispone");
    let [users, setUsers] = useState("Sin usuarios");
    let [suppliers, setMarcas] = useState("No dispone")
    let [categories, setCategory] = useState("No dispone")

    let datos = [
        {
            titulo: "Products in Data Base",
            cifra: products,
            colorBorder: "primary",
            icono: "fa-clipboard-list"
        },

        {
            titulo: "Users quantity",
            cifra: users,
            colorBorder: "warning",
            icono: "fa-user-check"
        },
        {
            titulo: "Total Suppliers",
            cifra: suppliers,
            colorBorder: "success",
            icono: "fa-dollar-sign"
        },
        {
            titulo: "Total Categories",
            cifra: categories,
            colorBorder: "warning",
            icono: "fa-user-check"
        }
    ]
    
    useEffect(() => {
        fetch("http://localhost:3000/api/products")
        .then(resultado => resultado.json())
        .then(dataProduct => {
            setProducts(dataProduct.meta.TotalModelos)
        })

        fetch("http://localhost:3000/api/users")
        .then(resultado => resultado.json())
        .then(dataUser => {
            setUsers(dataUser.meta.total)
        })

        fetch("http://localhost:3000/api/suppliers")
        .then(resultado => resultado.json())
        .then(dataSupp => {
            setMarcas(dataSupp.meta.total_suppliers)
        })

        fetch("http://localhost:3000/api/categories")
        .then(resultado => resultado.json())
        .then(dataCat => {
            setCategory(dataCat.meta.total_categories)
        })

   }, [])


    return (					
        <div className="row">
        {datos.map((dato, i) => 
            <SmallCard key={i} 
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