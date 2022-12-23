'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembeli extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pembeli.hasMany(models.buku)
    }
  }
  pembeli.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    alamat: DataTypes.STRING,
    bukuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pembeli',
  });
  return pembeli;
};