const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const sequelize = db.sequelize;

const productsFilePath = path.join(__dirname, '../data/listadoProductos.json');
const products1 = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



function findAll(){
   let data = fs.readFileSync(path.join(__dirname, "../data/listadoProductos.json"), "utf-8");
   let productos = JSON.parse(data);
   return productos;
}
function writeFile(array){
    let string = JSON.stringify(array, null, 4)
    fs.writeFileSync(path.join(__dirname, "../data/listadoProductos.json"), string)
}

//*---------------------------------------------------------------------------------------------*//

const controller={
        list: (req, res) => {
        db.product.findAll({
            include: [{association: "productoProveedor"}],
            include: [{association: "categoriaProducto"}]
        })
        .then(function(product){
            res.render('listadoDeProductos', {product})
        })
    },   

    detail: (req, res) => {
        db.product.findByPk(req.params.id,{
            include: [{association: "productoProveedor"}],
            include: [{association: "categoriaProducto"}]
        })
        .then(function(product){
            res.render('detail', {product});
        })},

    add: (req, res) => {
        let product = db.product.findByPk(req.params.id);
        let categoriaProducto = db.productCategory.findAll();
        let productoProveedor = db.supplier.findAll();
        
        Promise.all([product,categoriaProducto,productoProveedor])
        .then(function([product,categoriaProducto,productoProveedor]){
            return res.render('form_productos_create', {product: product,categoriaProducto:categoriaProducto,productoProveedor:productoProveedor });
        });
    },

    create:(req, res) => {
        db.product.create({
            SKU:req.body.SKU,
            nombre: req.body.nombre,
			precio: req.body.precio,
			peso: req.body.peso,
            descripcion: req.body.descripcion,
            create_date:req.body.create_date,
            categoria_id:req.body.categoria_id,
            stock:req.body.stock,
            proveedor_id:req.body.proveedor_id,
        })
           return res.redirect("/product/listadoDeProductos");    
    },

    edit: (req, res) => {
        let product = db.product.findByPk(req.params.id);
        let categoriaProducto = db.productCategory.findAll();
        let productoProveedor = db.supplier.findAll();

        Promise.all([product,categoriaProducto,productoProveedor])
        .then(function([product,categoriaProducto,productoProveedor]){
            return res.render('form_productos_edit', {product: product,categoriaProducto:categoriaProducto,productoProveedor:productoProveedor });
        });
    },

    update: (req, res) => {
        db.product.update({
            SKU:req.body.SKU,
            nombre: req.body.nombre,
			precio: req.body.precio,
			peso: req.body.peso,
            descripcion: req.body.descripcion,
            create_date:req.body.create_date,
            categoria_id:req.body.categoria_id,
            stock:req.body.stock,
            proveedor_id:req.body.proveedor_id,
        })
    

        res.redirect("/product/listadoDeProductos")
    },

    destroy: (req, res) => {
        const producto = findAll()

    //busco el producto y obtengo su indice
        let productIndex = producto.findIndex(function(elemento){
            return elemento.id == req.params.id
        })
    //elimino el producto que busque, pasando su indice
        producto.splice(productIndex,1)


        writeFile(producto)
        res.redirect("/product/listadoDeProductos")
    },


    carrito: (req, res) => {
        res.render('productCart');
    },

    detalle_producto: (req, res) => {
        res.render('productDetail');

    },

    detalle_producto2: (req, res) => {
        res.render('productDetail_2');
    },

    detalle_producto3: (req, res) => {
        res.render('productDetail_3');
    },

    form_producto: (req, res) => {
        res.render('form_productos_create');
    },
}

//TODO: exportar el modulo
module.exports = controller;