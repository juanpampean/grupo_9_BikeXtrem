const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), 'utf-8'))


function writeFile(array){
    const arrayString = JSON.stringify(array, null, 4);
    fs.writeFileSync(path.join (__dirname, '../data/users.json'), arrayString);
}

module.exports = {
    login: function(req, res){
        res.render("login");
    },
    register: function(req, res){
        res.render("registro");
    },
    processRegister: function (req, res){
        //console.log(req.file)
           const newUser = {
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

        res.redirect('/users/Login');
        
    }
    
    
    
}