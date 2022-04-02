const { check, body, validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");

function findAll() {
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json")));
    return users;
}
module.exports = {
    registro: [
        check("Nombre")
        .notEmpty()
        .withMessage("campo nombre vacío"),

        check("Email")
        .notEmpty()
        .withMessage("Email vacío")
        .bail()
        .isEmail()
        .withMessage("formato de email incorrecto")
        .custom(function(value) {
            let users = findAll()
                //busco al usuario
            let userFound = users.find(function(user) {
                    return user.Email == value
                })
                //si existe un usuario devuelvo un error
            if (userFound) {
                throw new Error("Email ya registrado")
            }
            //sino devuelvo true
            return true;

        }),

        check("Genero")
        .notEmpty()
        .withMessage("campo genero vacío"),

        check("Cumpleaños")
        .notEmpty()
        .withMessage("campo cumpleaños vacío"),

        check("Ciudad")
        .notEmpty()
        .withMessage("campo Ciudad vacío"),

        check("contraseña")
        .notEmpty()
        .withMessage("campo password vacío")
    ],
    login: [
        check("email")
        .notEmpty()
        .withMessage("Email vacío"),

        check("contraseña")
        .notEmpty()
        .withMessage("campo password vacío")
    ]
}