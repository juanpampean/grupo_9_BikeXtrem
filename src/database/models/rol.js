const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const rol = sequelize.define("rol", {
        //configuraciones de las columnas//
        id: {
            type: dataType.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre_rol: {
            type: dataType.VARCHAR(50),
        },
        tableName: 'rols',
        //Si el nombre de la tabla no coincide con el del modelo

        timestamps: false,
        //Si no tengo timestamps que como createdAt: {type: DataTypes.DATE} //
    });
    return rol;
}