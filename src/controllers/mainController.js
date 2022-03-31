//TODO: agregar el path
const path = require('path');

//TODO: crear el mainController con el index y el about
const mainController = {
    index: (req, res) => {
          res.render('index')
      /*  res.sendFile(path.join(__dirname, '../views/users/index.html'))*/;
    },
    login: (req, res) => {
          res.render('login')
        /*res.sendFile(path.join(__dirname, '../views/users/login.ejs'))*/;
    },
    registro: (req, res) => {
      res.render('registro')
    /*res.sendFile(path.join(__dirname, '../views/users/registro.ejs'))*/;
},
};

//TODO: exportar el modulo
module.exports = mainController;