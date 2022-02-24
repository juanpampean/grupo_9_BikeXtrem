const path = require('path')
const fs = require("fs");

function findAll(){
   let data = fs.readFileSync(path.join(__dirname, "../data/listadoProductos.json"), "utf-8")
   let productos = JSON.parse(data);
   return productos
}
function writeFile(array){
    let string = JSON.stringify(array, null, 4)
    fs.writeFileSync(path.join(__dirname, "../data/listadoProductos.json"), string)
}

//*---------------------------------------------------------------------------------------------*//


const products = {
    carrito: (req, res) => {
        res.render('productCart');
        /*res.sendFile(path.join(__dirname, '../views/products/productCart2.html'))*/
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
module.exports = products;