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



//TODO: exportar el modulo
module.exports = router;