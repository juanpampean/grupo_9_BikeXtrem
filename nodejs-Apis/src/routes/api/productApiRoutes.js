const express = require('express');
const router = express.Router();

//TODO: agregar el Controller
const productApiController = require('../../controllers/api/productApiController');


//APIS PRODUCTS
router.get("/", productApiController.productList);
router.get("/:id", productApiController.productId);

//TODO: exportar el modulo
module.exports = router;