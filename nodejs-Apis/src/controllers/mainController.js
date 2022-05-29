//TODO: agregar el path
const path = require('path');

//TODO: crear el mainController con el index y el about
const mainController = {
    index: (req, res) => {
          res.render('index')

    },
    login: (req, res) => {
          res.render('login')

    },
    registro: (req, res) => {
      res.render('registro')
},

};

//TODO: exportar el modulo
module.exports = mainController;