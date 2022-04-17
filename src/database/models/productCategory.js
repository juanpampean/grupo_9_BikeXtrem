const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const productCategory = sequelize.define("productCategory", {
            id: {
                type: dataType.INTEGER(11),
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: dataType.VARCHAR(100),
            }
        },

        {
            tableName: 'product_category',
            timestamps: 'false'
        });
    return productCategory;
}