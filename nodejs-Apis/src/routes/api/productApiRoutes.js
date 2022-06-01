const express = require('express');
const router = express.Router();

//TODO: agregar el Controller
const productApiController = require('../../controllers/api/productApiController');


//APIS PRODUCTS
router.get("/", productApiController.api1);
//router.get("/products/:id", productApiController.api2);

//TODO: exportar el modulo
module.exports = router;