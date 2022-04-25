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