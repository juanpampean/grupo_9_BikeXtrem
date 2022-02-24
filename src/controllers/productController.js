const path = require('path')

const products = {
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
module.exports = products;