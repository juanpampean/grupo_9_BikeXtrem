const { check, body, validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const db = require("../database/models")


module.exports = {
    registro: [
        check("nombre")
        .notEmpty()
        .withMessage("campo nombre vacío"),

        check("apellido")
        .notEmpty()
        .withMessage("campo nombre vacío"),

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
        .withMessage("campo password vacío"),

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


    ],
    login: [
        check("email")
        .notEmpty()
        .withMessage("Email vacío"),

        check("contraseña")
        .notEmpty()
        .withMessage("campo password vacío")
    ],
    processEdit: [
        body("nombre").notEmpty().isLength({ min: 5 }).withMessage("campo nombre vacío"),
        body("precio").notEmpty().isNumeric().withMessage("campo precio vacío"),
        body("talle_producto").notEmpty().withMessage("Coloca Talle del Producto"),
        body("rodado").notEmpty().withMessage("campo rodado vacío"),
        body("velocidad").notEmpty().withMessage("campo velocidad vacío").isDate(),
        body("color").notEmpty().withMessage("campo color vacío"),
        body("descripcion").isLength({ min: 20 }).withMessage("Coloca descripción del producto acá"),
    ]
}