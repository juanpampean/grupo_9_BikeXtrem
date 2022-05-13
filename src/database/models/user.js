module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user",
    //configuraciones de las columnas
    {
        id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(45),
        },
        apellido: {
            type: DataTypes.STRING(45),
        },
        mail: {
            type: DataTypes.STRING(100),
            allowNull:false,
            unique:true,
        },
        contraseña: {
            type: DataTypes.STRING(100),
        },
        telefono: {
            type: DataTypes.STRING(100),
        },
        domicilio_entrega: {
            type: DataTypes.STRING(100),
        },
        ciudad: {
            type: DataTypes.STRING(100),
        },
        codigo_postal: {
            type: DataTypes.STRING(100),
        },
        fecha_nacimiento: {
            type: DataTypes.DATEONLY,
        },
        avatar: {
            type: DataTypes.STRING(100),
            allowNull:true,
        },

    }, {
    
        tableName:'users',
        timestamps:false,
    });
    user.associate = function(models){
        user.belongsTo(models.genres, {
            as:"genres",
            foreignKey:"genero_id"
        })
        user.hasMany(models.order, {
            as: "usuarioOrden",
            foreignKey: "usuario_id",
        })
    }

    return user;
}
