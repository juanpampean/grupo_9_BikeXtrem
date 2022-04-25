const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json")))
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { isError } = require("util");
const user = require("../database/models/user");
const sequelize = db.sequelize;


/*function writeFile(array) {
    const arrayString = JSON.stringify(array, null, 4);
    fs.writeFileSync(path.join(__dirname, '../data/users.json'), arrayString);
}*/



module.exports = {
    login: function(req, res) {
        res.render("login");
    },
    register: function(req, res) {
        res.render("registro");
    },
    profile: (req, res) => {
		res.render('userProfile', {
			user: req.session.usuarioLogueado
		});
	},
    processRegister: function(req, res) {
        const errors = validationResult(req)
        if (errors.errors.length > 0) {
            return res.render("registro", { errors: errors.mapped() })
        }
        else {db.user.create({
            nombre:req.body.Nombre,
            apellido:req.body.Apellido,
            mail:req.body.Email,
            contraseña:bcrypt.hashSync(req.body.contraseña, 10),
            telefono:req.body.telefono,
            ciudad:req.body.ciudad,
            domicilio_entrega:req.body.domicilio_entrega,
            codigo_postal:req.body.codigo_postal,
            fecha_nacimiento:req.body.Cumpleaños,
            rol_id:req.body.rol_id
        }).then(function(){
            return res.redirect('/users/Login')
         }); 
    }
        /*const newUser = {
            id: users.length + 1,
            nombre: req.body.Nombre,
            email: req.body.Email,
            contraseña: bcrypt.hashSync(req.body.contraseña, 10),
            genero: req.body.Genero,
            cumpleaños: req.body.Cumpleaños,
            ciudad: req.body.Ciudad,
            avatar: req.file ? req.file.filename : "image-default"
        }

        users.push(newUser);

        writeFile(users);

        res.redirect('/users/Login');*/ 

    },
    processLogin: function(req, res) {
        const errors = validationResult(req);
        if (errors.errors.length > 0) {
            res.render("login", { errorsLogin: errors.mapped() })
        }
        const userFound = users.find(function(user) {
            return user.email == req.body.email && bcrypt.compareSync(req.body.contraseña, user.contraseña)
        })
        if (userFound) {
            let user = {
                    nombre: userFound.nombre,
                    cumpleaños: userFound.cumpleaños,
                    ciudad: userFound.ciudad,
                    avatar: userFound.avatar
                }
                // proceso session
            req.session.usuarioLogueado = user
            if (req.body.Recuerdame) {
                res.cookie("user", user.nombre, { maxAge: 60000 * 24 })
                
            }

            res.redirect("/")
        } else {
            res.render("login", { errorsMsg: "Error datos inválidos" })
        }
    },
    logout: (req, res) => {
            res.clearCookie('user');
            req.session.destroy();
            return res.redirect('/');
        }
}