const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const supplier = sequelize.define("supplier", {
        //configuraciones de las columnas//
        id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(45),
        },
        telefono: {
            type: DataTypes.STRING(100),
        },
        mail: {
            type: DataTypes.STRING(100),
        }
    }, {
        tableName: 'suppliers',
        timestamps: 'false'
    });
    return supplier;
}