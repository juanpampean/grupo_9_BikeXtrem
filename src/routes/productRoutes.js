//TODO: agregar express
const express = require('express');

//TODO: agregar el Controller
const productController = require('../controllers/productController');

//TODO: agregar el router
const router = express.Router();

/*** ---------------------------------------------------------------------------------------------- ***/


/*** GET ALL PRODUCTS ***/  
router.get("/listadoDeProductos",productController.list);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.add); 
router.post('/create', productController.create); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get("/edit/:id", productController.edit);
router.put("/edit/:id", productController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete("/delete/:id", productController.destroy);

/***FIND ONE PRODUCT */
router.get("/buscar",productController.buscar);
router.get("/search",productController.search);


//TODO: exportar el modulo
module.exports = router;