'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbl_transaksi.belongsTo(models.User,{
        foreignKey: 'id_user'
      })
      tbl_transaksi.belongsTo(models.tbl_barang,{
        foreignKey: 'id_barang'
      })

    }
  }
  tbl_transaksi.init({
    no_transaksi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tgl_transaksi: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Nama_kasir: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total_bayar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Id_pelanggan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_barang: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbl_transaksi',
  });
  return tbl_transaksi;
};