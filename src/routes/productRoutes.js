//TODO: agregar express
const express = require('express');

//TODO: agregar el Controller
const productController = require('../controllers/productController');

//TODO: agregar el router
const router = express.Router();

/*** ---------------------------------------------------------------------------------------------- ***/

router.get('/form_productos', productController.form_producto);

/*** GET ALL PRODUCTS ***/  
router.get("/listadoDeProductos",productController.listadoDeProductos);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.create); 
router.post('/create', productController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get("/edit/:id", productController.edit);
router.put("/edit/:id", productController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete("/delete/:id", productController.destroy);


//TODO: exportar el modulo
module.exports = router;