const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define("order", {
            //configuraciones de las columnas//
            id: {
                type: DataTypes.BIGINT(11),
                primaryKey: true,
                autoIncrement: true,
            },

            fecha_orden: {
                type: DataTypes.DATE,
            },

            usuario_id: {
                type: DataTypes.BIGINT(11),
            },

            total_compra: {
                type: DataTypes.FLOAT(10,2),
            },

            direccion_orden: {
                type: DataTypes.STRING(50),
            },

            status_orden: {
                type: DataTypes.STRING(50),
            }
        },

        {
            tableName: 'orders',
            timestamps: false
        });
    return order;
}