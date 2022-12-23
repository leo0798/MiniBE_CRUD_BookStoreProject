'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      buku.hasMany(models.penjual)
      buku.belongsTo(models.pembeli)
    }
  }
  buku.init({
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    foto: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'buku',
  });
  return buku;
};