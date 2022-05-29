module.exports = (sequelize, DataTypes) => {
    let alias = 'product';
    let cols = {
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
            type: DataTypes.FLOAT(10, 2),
        },
        descripcion: {
            type: DataTypes.STRING(50),
        },
        categoria_id: {
            type: DataTypes.BIGINT(11),
        },
        imagen: {
<<<<<<< HEAD:src/database/models/product.js
            type: DataTypes.STRING(255),
=======
            type: DataTypes.STRING(100),
            allowNull:true,
>>>>>>> c42db98eff13091e8fe804bbe5c3ad8ee23a3d33:nodejs-Apis/src/database/models/product.js
        },
        create_date: {
            type: DataTypes.DATE,
            allowNull:true,
        },

        stock: {
            type: DataTypes.BIGINT(11),
        },

        proveedor_id: {
            type: DataTypes.BIGINT(11),
            allowNull:true,
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const product = sequelize.define(alias, cols, config);

    product.associate = function(models) {
        product.belongsToMany(models.order, {
            as: "productoOrden",
            foreignKey: "producto_id",
            through: "productOrder",
            otherKey: "orden_id",
        })
        product.belongsTo(models.productCategory, {
            as: "categoriaProducto",
            foreignKey: "categoria_id",
        })
        product.belongsTo(models.supplier, {
            as: "productoProveedor",
            foreignKey: "proveedor_id",
        })
    }
    return product
}