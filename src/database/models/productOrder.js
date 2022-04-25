module.exports = (sequelize, DataTypes) => {
    let alias = "productOrder";
    //configuraciones de las columnas
    let cols = {
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
            type: DataTypes.FLOAT(10, 2),
        }
    };
    let config = {
        tableName: 'products_orders',
        timestamps: false
    };
    //Establecemos las relaciones entre tablas
    const productOrder = sequelize.define(alias, cols, config);

    /*productOrder.associate = function(models) {
        productOrder.belongsToMany(models.order, {
            as: "pedidoProducto",
            through: "orders",
            foreignKey: "orden_id",
            otherKey: "producto_id",
            timestamps: false
        })
        productOrder.hasMany(models.product, {
            as: "productoPedido",
            through: "products",
            foreignKey: "producto_id",
            timestamps: false
        })
    } */
    return productOrder;
}