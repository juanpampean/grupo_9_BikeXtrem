//TODO: agregar express
const express = require('express');

//TODO: agregar el mainController
const mainController = require('../controllers/mainController');
const product = require ('../controllers/products');
//TODO: agregar el router
const router = express.Router();

//TODO: agregar el controller index y about
router.get('/', mainController.index);
router.get('/Login', mainController.login_Registro);
router.get('/ProductCart',product.carrito);
router.get('/ProductDetail',product.detalle_producto);
router.get('/ProductDetail_2',product.detalle_producto2);
router.get('/ProductDetail_3',product.detalle_producto3);




//TODO: exportar el modulo
module.exports = router;