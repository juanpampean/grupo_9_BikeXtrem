//TODO: agregar express
const express = require('express');
const app = express();

//TODO: agregar el mainController y ProductController
const mainController = require('../controllers/mainController');
const productController = require('../controllers/productController');
//TODO: agregar el router
const router = express.Router();

//TODO: agregar el controller index y about
router.get('/', mainController.index);
router.get('/ProductCart', productController.carrito);
router.get('/ProductDetail', productController.detalle_producto);
router.get('/ProductDetail_2', productController.detalle_producto2);
router.get('/ProductDetail_3', productController.detalle_producto3);

/*router.get("/profile", function(req, res) {
    console.log(req.session.usuarioLogueado)
    if (req.session.usuarioLogueado)
        res.send("Hola" + " " + req.session.usuarioLogueado.nombre)
    else {
        res.send("No estas logueado")
    }
})*/





//TODO: exportar el modulo
module.exports = router;