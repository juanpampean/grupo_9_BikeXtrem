const express = require('express');
const router = express.Router();

const productApiPagination = require('../../controllers/api/productApiPagination');

router.get("/productsPag", productApiPagination.productsPag);

module.exports= router;