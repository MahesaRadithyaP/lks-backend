'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbl_log.belongsTo(models.User,{
        foreignKey: 'id_user'
      })
    }
  }
  tbl_log.init({
    waktu: {
      type: DataTypes.DATE,
      allowNull: false
    },
    aktivitas:{
      type: DataTypes.STRING,
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
     
    }
  }, {
    sequelize,
    modelName: 'tbl_log',
  });
  return tbl_log;
};