const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const fetch = require('node-fetch');
const { response } = require('express');
const { count } = require('console');
const product = require("../../database/models/product")



const productApiController={
    /*productList: function(req,res){
        db.product
        .findAll({include:["productoProveedor","categoriaProducto"],
                order: [["create_date","DESC"]]
        })
        .then(product =>{
                let DataShort = product.map(products => {
                        
                        return {
                            id: products.id,
                            nombre: products.nombre,
                            descripcion: products.descripcion,
                            proveedor:products.productoProveedor,
                            fecha_Creacion:products.create_date,
                            imagen:"http://localhost:3000/static/images/product/" + products.imagen,
                            EndPoint: "api/products/" + products.id 
                            
                             }
                        })
                

                let respuesta = {
                        meta:{
                                status:200,
                                total: product.length,
                                products:DataShort
                        },
                
                        
                }
                        res.json(respuesta)

                })
     },
     */
     listProducts: async function(req,res){
        let modelosxcategoria1 = await db.product.findAll({
                include:["categoriaProducto"],
                attributes: [
                        'categoriaProducto.nombre',
                        [sequelize.fn("COUNT", sequelize.col("categoria_id")),'Modelos'],],
                        group:['categoriaProducto.nombre'],
                        raw: true
                             
    })
        let modelosxcategoria = await modelosxcategoria1.map(products=>{
                return {
                        Categoria:products.nombre,
                        Modelos:products.Modelos
                }
        })
        let totalproductos= await db.product.findAll({include:["categoriaProducto","productoProveedor"],
        order: [["create_date","DESC"]]})

        let detallesproductos = totalproductos.map(products => {
                        
                return {
                    id: products.id,
                    nombre: products.nombre,
                    descripcion: products.descripcion,
                    proveedor:products.productoProveedor.nombre,
                    categoria:products.categoriaProducto.nombre,
                    fecha_Creacion:products.create_date,
                    imagen:"http://localhost:3001/static/images/product/" + products.imagen,
                    EndPoint: "api/products/" + products.id 
                    
                     }
                })
                   
 
    
    
        let jsonproducts = {
                                meta:{
                                    status:200,
                                    TotalModelos:totalproductos.length,
                                    countByCategory:modelosxcategoria,
                                    products:detallesproductos
                                    
                                }
                        }
                res.json(jsonproducts)

                
     },

    stocksProducts: async function (req,res){
            let stockxproveedor1 = await db.product.findAll({
                include:["productoProveedor"],
                attributes: [
                        'productoProveedor.nombre',
                        [sequelize.fn("SUM", sequelize.cast(sequelize.col("stock"), 'integer')),'totalbicis'],],
                        group:['productoProveedor.nombre'],
                        raw: true
                        
    })
           let stockxproveedor = await stockxproveedor1.map(products=>{
                  return {
                Proveedor:products.nombre,
                Stock:Number(products.totalbicis)
        }})
            let stocktotal = await db.product.findOne({
                attributes: [[sequelize.fn("SUM", sequelize.cast(sequelize.col("stock"), 'integer')), "totalAsset"]],
                raw: true,
                
              })
            let total_bicis = Number(stocktotal.totalAsset)

            let jsonproducts = {
                    meta:{
                        status:200,
                        stocktotal:total_bicis, 
                        proveedores:stockxproveedor
                    }
            }
            res.json(jsonproducts)
},
   
    productId: (req,res) => {
            let fullUrl = req.protocol + '://' + req.get('host');
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
                                    Imagen: fullUrl + "/static/images/product/" + product.imagen   

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
},
    paginar: function(req,res) {db.product.findAndCountAll({
        where: condition,
        limit,
        offset,
        attributes: ["id", "name",'address','created'],
      })
        .then((data) => {
          const response = getPagingData(data, page, limit);
          res.send(response);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials.",
          });
        });
    
    
    
    const getPagination = (page, size) => {
      const limit = size ? +size : 1;
      const offset = page ? page * limit : 0;
    
      return { limit, offset };
    };
    
    const getPagingData = (data, page, limit) => {
      const { count: totalItems, rows: tutorials } = data;
      const currentPage = page ? +page : 0;
      const totalPages = Math.ceil(totalItems / limit);
    
      return { totalItems, tutorials, totalPages, currentPage };
    };
    }
}   
module.exports = productApiController;