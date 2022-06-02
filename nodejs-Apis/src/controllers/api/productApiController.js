const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const fetch = require('node-fetch');
const { response } = require('express');
const { count } = require('console');
const product = require("../../database/models/product")



const productApiController={
    productList: function(req,res){
        db.product
        .findAll({include:["productoProveedor"],
                order: [["create_date","DESC"]]
        })
        .then(product =>{
                let DataShort = product.map(products => {
                        
                        return {
                            id: products.id,
                            nombre: products.nombre,
                            descripcion: products.descripcion,
                            Proveedor:products.productoProveedor,
                            Fecha_Creacion:products.create_date,
                            EndPoint: "api/products/" + products.id 
                            
                             }
                        })
                let respuesta = {
                        meta:{
                                status:200,
                                total: product.length
                        },
                        data: DataShort
                }
                        res.json(respuesta)

                })
    },
    productId: (req,res) => {
            db.product.findByPk(req.params.id,{include:["productoProveedor","categoriaProducto"]})
            .then(product =>{
                    let productJson = {
                            data: {
                                    id:product.id,
                                    nombre:product.nombre,
                                    descripción:product.descripcion,
                                    Categoria:product.categoriaProducto,
                                    Marca:product.productoProveedor,
                                    Stock:product.stock,
                                    Precio:product.precio, 
                                    Imagen:"http://localhost:3000/static/images/product/" + product.imagen   

                            },
                    }
                    res.json(productJson)
            });

    },
    suppliers : function(req,res){
            db.supplier.findAll()
            .then(supplier =>{
                    let respuesta = {
                            meta:{
                                    status:200,
                                    total_suppliers:supplier.length
                            }

                    }
                    res.json(respuesta)
            })
    },
    categories : function(req,res){
        db.productCategory.findAll()
        .then(cat =>{
                let respuesta = {
                        meta:{
                                status:200,
                                total_categories:cat.length
                        }

                }
                res.json(respuesta)
        })
}
}   
module.exports = productApiController;