const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define("order", {
            //configuraciones de las columnas//
            id: {
                type: dataType.INTEGER(11),
                primaryKey: true,
                autoIncrement: true
            },

            fecha_orden: {
                type: dataType.datetime
            },

            usuario_id: {
                type: dataType.INTEGER(11),
            },

            total_compra: {
                type: dataType.FLOAT,
            },

            direccion_orden: {
                type: dataType.VARCHAR(255),
            },

            status_orden: {
                type: dataType.VARCHAR(45),
            }
        },

        {
            tableName: 'orders',
            timestamps: 'false'
        });
    return order;
}