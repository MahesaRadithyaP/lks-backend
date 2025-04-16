'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_barangs', {
      id_barang: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_barang: {
        type: Sequelize.STRING,
        allowNull: false
        
      },
      nama_barang: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expired_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      jumlah_barang: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      satuan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      harga_satuan: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_barangs');
  }
};