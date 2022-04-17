const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("product", {
            //configuraciones de las columnas//module.exports = (sequelize, dataType) => {
            id: {
                type: dataType.INTEGER(11),
                primaryKey: true,
                autoIncrement: true
            },
            SKU: {
                type: dataType.INTEGER(11),
            },
            nombre: {
                type: dataType.VARCHAR(255),
            },
            precio: {
                type: dataType.INTEGER(11),
            },
            peso: {
                type: dataType.FLOAT,
            },
            descripcion: {
                type: dataType.VARCHAR(255),
            },
            categoria_id: {
                type: dataType.INTEGER(11),
            },
            imagen: {
                type: dataType.imagen
            },
            create_date: {
                type: dataType.DATE,
            },

            stock: {
                type: dataType.INTEGER(11),
            },

            proveedor_id: {
                type: dataType.INTEGER(11),
            }
        },

        {
            tableName: 'products',
            timestamps: 'false'
        });
    return product;
}