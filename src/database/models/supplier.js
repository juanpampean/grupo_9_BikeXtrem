const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const supplier = sequelize.define("supplier", {
        //configuraciones de las columnas//
        id: {
            type: dataType.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataType.VARCHAR(45),
        },
        telefono: {
            type: dataType.VARCHAR(100),
        },
        mail: {
            type: dataType.VARCHAR(100),
        }
    }, {
        tableName: 'suppliers',
        timestamps: 'false'
    });
    return supplier;
}