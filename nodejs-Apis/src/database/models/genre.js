const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    const genre = sequelize.define("genres", {
        //configuraciones de las columnas//
        id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        nombre_genero: {
            type: DataTypes.STRING(50),
            allowNull:false,
        },},{
        tableName: 'genres',//Si el nombre de la tabla no coincide con el del modelo//
        timestamps: false//Si no tengo timestamps que como createdAt: {type: DataTypes.DATE} //
        
    });
    genre.associate = function(models) {
        genre.hasMany(models.user, {
            as:"users",
            foreignKey:"genero_id"
        })
    }
    return genre;
}