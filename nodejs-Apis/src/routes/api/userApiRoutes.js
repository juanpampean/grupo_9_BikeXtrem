const express = require('express');
const userApiController = require('../../controllers/api/userApiController');
const router = express.Router();

//Lista Completa de usuarios//
router.get('/', userApiController.list);

//Detalles de un usuario particular//
router.get('/user/:id', userApiController.detail);

module.exports = router;