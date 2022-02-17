//TODO: agregar express
const express = require('express');

//TODO: agregar el mainController
const mainController = require('../controllers/mainController');
const products = require('../controllers/products');
//TODO: agregar el router
const router = express.Router();

//TODO: agregar el controller index y about
router.get('/', mainController.index);
router.get('/Login', mainController.login_Registro);
router.get('/ProductCart', products.carrito);
router.get('/ProductDetail', products.detalle_producto);
router.get('/ProductDetail_2', products.detalle_producto2);
router.get('/ProductDetail_3', products.detalle_producto3);
router.get('/form_productos', products.form_producto);




//TODO: exportar el modulo
module.exports = router;