const path = require('path')

const products = {
    carrito: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/productCart.html'));
    },
};

//TODO: exportar el modulo
module.exports = products;
