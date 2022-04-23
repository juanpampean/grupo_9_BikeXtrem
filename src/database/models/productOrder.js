const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const productOrder = sequelize.define("productOrder", {
            //configuraciones de las columnas//module.exports = (sequelize, dataType) => {
            id: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                autoIncrement: true
            },
            orden_id: {
                type: DataTypes.BIGINT(11),
            },
            producto_id: {
                type: DataTypes.BIGINT(11),
            },

            precio: {
                type: DataTypes.BIGINT(11),
            },
            cantidad: {
                type: DataTypes.BIGINT(11),
            },
            subtotal_compra: {
                type: DataTypes.FLOAT(10,2),
            }
        },

        {
            tableName: 'products_orders',
            timestamps: false
        });
    return productOrder;
}