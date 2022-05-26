//TODO: agregar express
const express = require('express');

//TODO: agregar el router
const router = express.Router();
const multer  = require('multer');
const { body } = require("express-validator");
const validator = require("../middlewares/validationForm");
const uploadProductPhoto = require('../middlewares/multerMiddlewareP');


//TODO: agregar el Controller
const productController = require('../controllers/productController');


/*** ---------------------------------------------------------------------------------------------- ***/

/*** GET ALL PRODUCTS ***/  
router.get("/listadoDeProductos",productController.list);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productController.add);
router.post('/create',validator.productCreate,uploadProductPhoto.single("file"), productController.create);

/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productController.edit);
router.put("/edit/:id",uploadProductPhoto.single("file"), validator.processEdit, productController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productController.destroy);

/***FIND ONE PRODUCT */
router.get("/buscar", productController.buscar);
router.get("/search", productController.search);


//TODO: exportar el modulo
module.exports = router;