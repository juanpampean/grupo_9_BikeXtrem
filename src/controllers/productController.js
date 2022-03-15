const path = require('path');
const fs = require("fs");

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
    listadoDeProductos: (req, res) => {
        const producto = findAll();
        res.render('listadoDeProductos', {producto: producto})
    },

    detail: (req, res) => {
        const producto = findAll();
        let productFound = producto.find (function(elemento){
            return elemento.id == req.params.id;
        });
        res.render('detail', {productFound: productFound});
    },

    create: (req, res) => {
        res.render('form_productos');
    },

    store: (req, res) => {
        const producto = findAll();
        let newProduct = {
			id: producto.length + 1,
			nombre1: req.body.nombre1,
            marca: req.body.marca,
			precio: req.body.precio,
			talle_producto: req.body.talle_producto,
			fotoProducto: req.body.fotoProducto,
            rodado: req.body.rodado,
            velocidad: req.body.velocidad,
            color: req.body.color,
			descripcion: req.body.descripcion}

        producto.push(newProduct)
        writeFile(producto)
        res.redirect("/product/listadoDeProductos")
    },

    edit: (req, res) => {
        const producto = findAll()
        let productToEdit = producto.find(function (product) {
			return product.id == req.params.id
		})
        res.render("form_productos",{product:productToEdit})
    },

    update: (req, res) => {
        const producto = findAll();
        let productFound = producto.find(function(elemento){
            return elemento.id == req.params.id
        })

        productFound.nombre_producto = req.body.nombre;
        productFound.marca = req.body.marca;
		productFound.precio = req.body.precio;
		productFound.talle_producto = req.body.TalleCuadro;
		productFound.fotoProducto = req.body.Imagen;
        productFound.rodado = req.body.Rodado;
        productFound.velocidades = req.body.Velocidades;
        productFound.color = req.body.color;
		productFound.descripcion = req.body.Descripcion;

        writeFile(producto);

        res.redirect('/listadoDeProductos')
    },

    destroy: (req, res) => {
        const producto = findAll();
        let productIndex = producto.findIndex(function(elemento){
            return elemento.id == req.params.id;
        })

        producto.splice(productIndex,1);
        writeFile(producto);
        res.redirect('/listadoDeProductos');
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
        res.render('form_productos');
    },
}

//TODO: exportar el modulo
module.exports = controller;