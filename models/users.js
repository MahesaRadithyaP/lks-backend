'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {  // Gantilah 'Users' menjadi 'User'
    static associate(models) {
      User.hasMany(models.tbl_transaksi, {
        foreignKey: 'id_user'
      });
      User.hasMany(models.tbl_log, {
        foreignKey: 'id_user'
      });
    }
  }
  User.init({
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    tipe_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telepon: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true 
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
