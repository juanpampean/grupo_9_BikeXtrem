const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json")))
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { isError } = require("util");
const user = require("../database/models/user");
const { localsName } = require("ejs");
const sequelize = db.sequelize;






module.exports = {
    login: function(req, res) {
        res.render("login");
    },
    register: function(req, res) {
        db.genres.findAll()
        .then(allGenre => {
        res.render('registro', {allGenre})})
        .catch(error => res.send(error));
    },
    profile: (req, res) => {
       db.user.findByPk(res.locals.userLogged.id)
            .then(userLog => {
                res.render('userProfile', {userLog})
            })
    },
    processRegister: function(req, res) {
        const errors = validationResult(req)
        if (errors.errors.length > 0) {
            return res.render("registro", { errors: errors.mapped()})
        } else 
        {db.user.create({
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            mail:req.body.email,
            contraseña:bcrypt.hashSync(req.body.contraseña, 10),
            telefono:req.body.telefono,
            ciudad:req.body.ciudad,
            domicilio_entrega:req.body.domicilio_entrega,
            codigo_postal:req.body.codigo_postal,
            fecha_nacimiento:req.body.cumpleaños,
            avatar:req.body.avatar,
            genero_id:req.body.genre_id,
        }).then(function(){
            return res.redirect('/users/Login')
         }).catch(error => res.send(error))}
    },
    edit: function(req,res) {
        db.user.findByPk(res.locals.userLogged.id)
        .then((userLog) => res.render('userEdit', {userLog}))
        .catch(error => res.send(error))
    },
    update: function(req,res) {
    db.user.update(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            ciudad: req.body.ciudad,
            fecha_nacimiento: req.body.cumpleaños,

        },
        {
            where:{
                id: res.locals.userLogged.id
            }
        })
    .then(()=>{
        return res.redirect("/")
    })
    .catch(error => res.send(error))
    },
    processLogin: function(req, res) {
         db.user.findOne({ where : {mail : req.body.email }}).then(userIn=>{
            if(userIn){
                const password_valid =  bcrypt.compareSync(req.body.contraseña,userIn.contraseña);
                if(password_valid){
                 let user = {
                     id:userIn.id,
                     nombre: userIn.nombre,
                     apellido:userIn.apellido,
                     cumpleaños: userIn.cumpleaños,
                     ciudad: userIn.ciudad,
                     avatar: userIn.avatar,
                     mail:userIn.mail,
                 }
                 req.session.usuarioLogueado = user;
                    if (req.body.Recuerdame) {
                        res.cookie("user", user.nombre, { maxAge: 60000 * 24 })   
                        }
                res.redirect("/")
                } else {
                  res.status(400).json({ error : "Password Incorrect" })
                }
            }else{
                res.status(404).json({ error : "User does not exist" });
                };
                
        });
    },
    list: (req, res) => {
        db.user.findAll({
            include: ['genres']
        })
            .then(users => {
                res.render('listadoUser.ejs', {users})
            })
    },
       
        /*delete: function (req,res) {
            let movieId = req.params.id;
            Movies
            .findByPk(movieId)
            .then(Movie => {
                return res.render(path.resolve(__dirname, '..', 'views',  'moviesDelete'), {Movie})})
            .catch(error => res.send(error))
        },
        destroy: function (req,res) {
            let movieId = req.params.id;
            Movies
            .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
            .then(()=>{
                return res.redirect('/movies')})
            .catch(error => res.send(error)) 
        }*/
        

    logout: (req, res) => {
            res.clearCookie('user');
            req.session.destroy();
            return res.redirect('/');
        }
}