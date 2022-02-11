const path = require('path')

const products = {
    carrito: (req, res) => {
        res.render('productCart');
    },

    detalle_producto: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/productDetail.html'));
    },
    detalle_producto2: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/productDetail_2.html'));
    },
    detalle_producto3: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/productDetail_3.html'));
    },
}

//TODO: exportar el modulo
module.exports = products;