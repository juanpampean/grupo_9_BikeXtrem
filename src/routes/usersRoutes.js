const path = require("path");
const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/users"));
  },
  filename: function (req, file, cb) {

    cb(null, file.fieldname + "-" + Date.now() + "-" + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

/* GET users listing. */

//register
router.get("/registro", usersController.register);
router.post("/registro", upload.single("avatar"), usersController.processRegister);


//login
router.get('/Login', usersController.login);


module.exports = router;