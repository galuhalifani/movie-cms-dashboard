'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) { // tanpa relasi, karena kalau movie di-delete, history tetap ada
      // define association here
    }
  };
  History.init({
    movieId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};