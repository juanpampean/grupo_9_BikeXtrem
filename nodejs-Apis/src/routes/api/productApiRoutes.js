const express = require('express');
const router = express.Router();

//TODO: agregar el Controller
const productApiController = require('../../controllers/api/productApiController');


//APIS PRODUCTS
router.get("/products", productApiController.productList);
router.get("/products/:id", productApiController.productId);
router.get("/suppliers", productApiController.suppliers);
router.get("/categories", productApiController.categories);

//TODO: exportar el modulo
module.exports = router;