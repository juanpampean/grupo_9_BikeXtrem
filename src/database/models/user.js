const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        //configuraciones de las columnas//
        id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(45),
        },
        apellido: {
            type: DataTypes.STRING(45),
        },
        mail: {
            type: DataTypes.STRING(100),
        },
        contraseña: {
            type: DataTypes.STRING(100),
        },
        telefono: {
            type: DataTypes.STRING(100),
        },
        domicilio_entrega: {
            type: DataTypes.STRING(100),
        },
        /*avatar: {
            type: DataTypes.imagen
        },*/
        rol_id: {
            type: DataTypes.BIGINT(11),
        }
    }, {
        tableName: 'users',
        timestamps: false
    });

    return user;
}