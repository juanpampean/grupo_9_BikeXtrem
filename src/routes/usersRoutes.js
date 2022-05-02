const path = require("path");
const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require('multer');
const { check } = require("express-validator");
const validator = require("../middlewares/validationForm");
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require("../middlewares/authMiddleware")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images/users"));
    },
    filename: function(req, file, cb) {

        cb(null, file.fieldname + "-" + Date.now() + "-" + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

/* GET users listing. */

//register

router.get("/registro",guestMiddleware, usersController.register);
router.post("/registro", upload.single("avatar"), validator.registro, usersController.processRegister);


//login
router.get('/Login',guestMiddleware, usersController.login);
router.post('/Login', validator.login, usersController.processLogin);

//logout
router.get('/logout', usersController.logout)

// CRUD
// Datos Usuario / Editar / Actualizar
router.get('/profile', authMiddleware, usersController.profile);
router.get('/edit/:id', authMiddleware, usersController.edit);
router.put('/edit/:id', authMiddleware, usersController.update);

// Lista Usuarios

router.get('/usuariosList', usersController.list);

// Bajar suscripción:
/*router.get('/delete/:id', usersController.delete);
router.delete('/delete/:id', usersController.destroy);
*/
module.exports = router;