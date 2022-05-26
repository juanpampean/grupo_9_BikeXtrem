const express = require('express');
const router = express.Router();

const partialsController = {
    head: (req, res) => {
        res.render('head');
    },
    header: (req, res) => {
        res.render('header');
    },
    footer: (req, res) => {
        res.render('footer');
    }
};
//TODO: exportar el modulo
module.exports = partialsController;