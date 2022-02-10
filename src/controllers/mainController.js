//TODO: agregar el path
const path = require('path');

//TODO: crear el mainController con el index y el about
const mainController = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/users/index.html'));
    },
    login_Registro: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/users/login_Registro.html'));
    },
};

//TODO: exportar el modulo
module.exports = mainController;