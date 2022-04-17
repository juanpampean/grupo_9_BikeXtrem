const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        //configuraciones de las columnas//
        id: {
            type: dataType.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataType.VARCHAR(45),
        },
        apellido: {
            type: dataType.VARCHAR(45),
        },
        mail: {
            type: dataType.VARCHAR(100),
        },
        contraseña: {
            type: dataType.VARCHAR(100),
        },
        telefono: {
            type: dataType.VARCHAR(100),
        },
        domicilio_entrega: {
            type: dataType.VARCHAR(255),
        },
        avatar: {
            type: dataType.imagen
        },
        rol_id: {
            type: dataType.INTEGER(11),
        }
    }, {
        tableName: 'users',
        timestamps: 'false'
    });

    return user;
}