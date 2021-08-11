'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Genre, { through: "Movie", 
        foreignKey: 'authorId',
        otherKey: 'genreId'
      });
      User.hasMany(models.Movie, { foreignKey: 'authorId' });
      User.hasMany(models.Bookmark, { foreignKey: 'userId' });
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,      
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email can not be empty"
        },
        notEmpty: {
          msg: "Email can not be empty"
        },
        isEmail: {
          msg: "Invalid e-mail address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,      
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password can not be empty"
        },
        notEmpty: {
          msg: "Password can not be empty"
        },
        len: {
          args: [8],
          msg: "Min. password length is 5"
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(instance => {
    let bcrypt = require('bcryptjs');
    let salt = bcrypt.genSaltSync(5);
    let hash = bcrypt.hashSync(instance.password, salt);
    
    instance.password = hash
  })
  return User;
};