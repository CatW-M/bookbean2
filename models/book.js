'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Book.belongsToMany(models.user, { through: 'userBooks'});
    }
  }
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categories: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};