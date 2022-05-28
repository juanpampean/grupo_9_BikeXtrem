const { check, body, validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const db = require("../database/models")


module.exports = {
    registro: [
        check("nombre")
        .notEmpty()
        .withMessage("campo nombre vacío")
        .isLength({min: 2})
        .withMessage("campo nombre debe tener al menos 2 caracteres"),


        check("apellido")
        .notEmpty()
        .withMessage("campo nombre vacío")
        .isLength({min: 2})
        .withMessage("campo apellido debe tener al menos 2 caracteres"),

        check("email")
        .notEmpty()
        .withMessage("Email vacío")
        .bail()
            .isEmail()
            .withMessage("formato de email incorrecto")
        .custom(function(value) {
            return db.user.findOne({
                where: { mail: value }
            }).then(user => {
                if (user) {
                    return Promise.reject("Email ya registrado")
                }
            })

        }),
        check("contraseña")
        .notEmpty()
        .withMessage("campo password vacío")
        .isLength({min: 8})
        .withMessage("contraseña debe tener al menos 8 caracteres"),

        check("genre_id")
        .notEmpty()
        .withMessage("campo genero vacío"),

        check("cumpleaños")
        .notEmpty()
        .withMessage("campo cumpleaños vacío"),

        check("ciudad")
        .notEmpty()
        .withMessage("campo Ciudad vacío"),

        check("domicilio_entrega")
        .notEmpty()
        .withMessage("campo domicilio vacío"),

        check("codigo_postal")
        .notEmpty()
        .withMessage("campo código postal vacío"),

        check("telefono")
        .notEmpty()
        .withMessage("campo teléfono vacío"),
        
        body('avatar').custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];
            
            if (!file) {
                throw new Error('Tienes que subir una imagen');
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }
            }
            return true;
        })
    ],
    login: [
        check("email")
        .notEmpty()
        .withMessage("Email vacío")
        .isEmail()
        .withMessage("formato de email incorrecto"),

        check("contraseña")
        .notEmpty()
        .withMessage("campo password vacío")
    ],
    processEdit: [
        check("nombre")
        .notEmpty().withMessage("campo nombre vacío")
        .isLength({ min: 5 }).withMessage("el campo debe tener al menos 5 caracteres"),

        check("descripcion").isLength({ min: 20 }).withMessage("Coloca descripción del producto acá"),
        
        body('file').custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];
            
            if (!file) {
                throw new Error('Tienes que subir una imagen');
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }
            }
            return true;
        })

    ],
    productCreate:  [
        check("nombre")
        .notEmpty()
        .withMessage("campo nombre vacío")
        .isLength({min:5})
        .withMessage("campo nombre debe tener al menos 15 caracteres"),

        check("descripcion")
        .isLength({min:20})
        .withMessage("este campo debe tener al menos 20 caracteres"),

        body('file').custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];
            
            if (!file) {
                throw new Error('Tienes que subir una imagen');
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }
            }
            return true;
        })
        
    ]
}