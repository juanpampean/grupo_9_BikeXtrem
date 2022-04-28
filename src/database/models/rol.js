const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const rol = sequelize.define("rol", {
        //configuraciones de las columnas//
        id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        nombre_rol: {
            type: DataTypes.STRING(50),
            allowNull:false,
        },},{
        tableName: 'rols',//Si el nombre de la tabla no coincide con el del modelo//
        timestamps: false//Si no tengo timestamps que como createdAt: {type: DataTypes.DATE} //
        
    });
    rol.associate = function(models) {
        rol.hasMany(models.user, {
            as:"users",
            foreignKey:"rol_id"
        })
    }
    return rol;
}