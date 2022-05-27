module.exports = (sequelize, DataTypes) => {
    let alias = "rol";
    //configuraciones de las columnas
    let cols = {
        id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre_rol: {
            type: DataTypes.STRING(50),
        }
    };
    let config = {
        tableName: 'rols',
        //Si el nombre de la tabla no coincide con el del modelo

        timestamps: false,
        //Si no tengo timestamps que como createdAt: {type: dataTypes.DATE} //
    };
    //Establecemos las relaciones entre tablas
    const rol = sequelize.define(alias, cols, config);
    rol.associate = function(models) {
        rol.belongsTo(models.user, {
            as: "rolUsuario",
            foreignKey: "rol_id"
        })
    }
    return rol;
}