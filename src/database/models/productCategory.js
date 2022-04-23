const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const productCategory = sequelize.define("productCategory", {
            id: {
                type: DataTypes.BIGINT(11),
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: DataTypes.STRING(100),
            }
        },

        {
            tableName: 'product_category',
            timestamps: false
        });
    return productCategory;
}