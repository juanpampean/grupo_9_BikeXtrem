const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("product", {
            //configuraciones de las columnas//module.exports = (sequelize, dataType) => {
            id: {
                type: DataTypes.BIGINT(11),
                primaryKey: true,
                autoIncrement: true
            },
            SKU: {
                type: DataTypes.BIGINT(11),
            },
            nombre: {
                type: DataTypes.STRING(100),
            },
            precio: {
                type: DataTypes.BIGINT(11),
            },
            peso: {
                type: DataTypes.FLOAT(10,2),
            },
            descripcion: {
                type: DataTypes.STRING(50),
            },
            categoria_id: {
                type: DataTypes.BIGINT(11),
            },
            /*imagen: {
                type: DataTypes.IMAGEN
            },*/
            create_date: {
                type: DataTypes.DATE,
            },

            stock: {
                type: DataTypes.BIGINT(11),
            },

            proveedor_id: {
                type: DataTypes.BIGINT(11),
            }
        },

        {
            tableName: 'products',
            timestamps: 'false'
        });
    return product;
}