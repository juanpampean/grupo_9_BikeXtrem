module.exports = (sequelize, DataTypes) => {
    let alias = "supplier";
    //configuraciones de las columnas
    let cols = {
        id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(45),
        },
        telefono: {
            type: DataTypes.STRING(100),
        },
        mail: {
            type: DataTypes.STRING(100),
        }
    };
    let config = {
        tableName: 'suppliers',
        timestamps: false,
    };
    //Establecemos las relaciones entre tablas
    const supplier = sequelize.define(alias, cols, config);
    supplier.associate = function(models) {
        supplier.hasMany(models.product, {
            as: "proveedorItem",
            foreignKey: "proveedor_id"
        })
    }
    return supplier;
}