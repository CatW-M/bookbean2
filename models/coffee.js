'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.coffee.belongsTo(models.user, {
      //   constraints: true,
      //   onDelete: 'CASCADE'
      // });
      // models.coffee.belongsToMany(models.Cart, {
      //   through: CartItem
      // });
    }
  }
  coffee.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
    imgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coffee',
  });
  return coffee;
};