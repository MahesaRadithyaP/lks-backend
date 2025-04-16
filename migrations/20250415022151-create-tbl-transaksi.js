'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_transaksis', {
      id_transaksi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_transaksi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tgl_transaksi: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Nama_kasir: {
        type: Sequelize.STRING
      },
      total_bayar: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id_user'
        }
      },
      id_pelanggan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_pelanggans',
          key: 'id_pelanggan'
        }
      },
      id_barang: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_barangs',
          key: 'id_barang'
        }
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
    await queryInterface.dropTable('tbl_transaksis');
  }
};