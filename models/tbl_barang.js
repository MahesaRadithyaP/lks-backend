'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbl_barang.hasMany(models.tbl_transaksi,{
        foreignKey: 'id_barang'
      })
    }
  }
  tbl_barang.init({
    kode_barang: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nama_barang: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expired_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    jumlah_barang: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    satuan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    harga_satuan: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbl_barang',
  });
  return tbl_barang;
};