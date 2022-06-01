const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const fetch = require('node-fetch');
const { response } = require('express');
const user = require('../../database/models/user');


const userApiController = {
    'list': (req, res) => {
        db.user.findAll()
            .then(users => {
                let DataShort = users.map(user => {
                    return {
                        id: user.id,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        email: user.mail,
                        url: "/api/users/" + user.id,

                    }
                })
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: '/api/users'
                    },
                    data: DataShort
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.user.findByPk(req.params.id,{include:["genres"]})
            .then(user => {
              
                let productJson = {
                    
                    data: {
                        id:user.id,
                        nombre: user.nombre,
                        apellido:user.apellido,
                        teléfono:user.telefono,
                        Fecha_Nacimiento:user.fecha_nacimiento,
                        Domicilio:user.domicilio_entrega,
                        Ciudad:user.ciudad,
                        Código_postal:user.codigo_postal,
                        genero:user.genres.nombre_genero,
                        Avatar:"http://localhost:3000/static/images/avatars/" + user.avatar,

                    },
                }
                res.json(productJson);
            });
    }
}
module.exports = userApiController;