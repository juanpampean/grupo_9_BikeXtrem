module.exports = (sequelize, DataTypes) => {
    let alias = 'productCategory';
    let cols = {
        id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
        }
    };
    let config = {
        tableName: 'product_category',
        timestamps: false
    };
    const productCategory = sequelize.define(alias, cols, config);

    productCategory.associate = function(models) {
        productCategory.hasMany(models.product, {
            as: "productoCategoria",
            foreignKey: "categoria_id"
        })
    }
    return productCategory;
}