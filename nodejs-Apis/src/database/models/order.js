const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    let alias = 'order';
    let cols = {
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
            type: DataTypes.FLOAT(10, 2),
        },

        direccion_orden: {
            type: DataTypes.STRING(50),
        },

        status_orden: {
            type: DataTypes.STRING(50),
        }
    };
    let config = {
        tableName: 'orders',
        timestamps: false
    };
    const order = sequelize.define(alias, cols, config);

    order.associate = function(models) {
        order.belongsTo(models.user, {
            as: "ordenUsuario",
            foreignKey: "usuario_id"
        })
        order.belongsToMany(models.product, {
            as: "productoOrden",
            foreignKey: "orden_id",
            through: "productOrder",
            otherKey: "producto_id",
            timestamps: false
        })
    }
    return order;
}