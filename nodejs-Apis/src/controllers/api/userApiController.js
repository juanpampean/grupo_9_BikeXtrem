const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const fetch = require('node-fetch');
const { response } = require('express');

const userApiController = {
    'list': (req, res) => {
        db.user.findAll()
            .then(users => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: '/api/users'
                    },
                    data: users
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.user.findByPk(req.params.id)
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
                        genero_id:user.genero_id,
                        Avatar:"static/images/avatars/" + user.avatar,

                    },
                    
                }
                res.json(productJson);
            });
    }
}
module.exports = userApiController;