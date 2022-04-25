module.exports = (sequelize, DataTypes) => {
    let alias = "user";
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
        apellido: {
            type: DataTypes.STRING(45),
        },
        mail: {
            type: DataTypes.STRING(100),
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
        /*avatar: {
            type: DataTypes.imagen
        },*/
        rol_id: {
            type: DataTypes.BIGINT(11),
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    //Establecemos las relaciones entre tablas
    const user = sequelize.define(alias, cols, config);
    user.associate = function(models) {
        user.hasMany(models.order, {
            as: "usuarioOrden",
            foreignKey: "usuario_id",
        })
        user.belongsTo(models.rol, {
            as: "usuarioRol",
            foreignKey: "rol_id"
        })

    };

    return user;
}