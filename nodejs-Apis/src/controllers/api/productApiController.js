const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const fetch = require('node-fetch');
const { response } = require('express');
const { count } = require('console');



const productApiController={
    api1: function(req,res){
        db.product
        .findAll()
        .then(product =>{
                countTotal: product.length
        })
                            
}}



module.exports = productApiController;