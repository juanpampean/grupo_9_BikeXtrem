const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const productOrder = sequelize.define("productOrder", {
            //configuraciones de las columnas//module.exports = (sequelize, dataType) => {
            id: {
                type: dataType.INTEGER(11),
                primaryKey: true,
                autoIncrement: true
            },
            orden_id: {
                type: dataType.INTEGER(11),
            },
            producto_id: {
                type: dataType.INTEGER(11),
            },

            precio: {
                type: dataType.INTEGER(11),
            },
            cantidad: {
                type: dataType.INTEGER(11),
            },
            subtotal_compra: {
                type: dataType.FLOAT,
            }
        },

        {
            tableName: 'products_orders',
            timestamps: 'false'
        });
    return productOrder;
}