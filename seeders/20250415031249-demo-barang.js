'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_barangs', [
      {
        kode_barang: 'BRG001',
        nama_barang: 'Indomie Goreng',
        expired_date: new Date('2025-12-31'),
        jumlah_barang: 100,
        satuan: 'pcs',
        harga_satuan: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang: 'BRG002',
        nama_barang: 'Kopi ABC',
        expired_date: new Date('2025-10-10'),
        jumlah_barang: 50,
        satuan: 'pcs',
        harga_satuan: 1500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang: 'BRG003',
        nama_barang: 'Sabun Lifebuoy',
        expired_date: new Date('2026-01-15'),
        jumlah_barang: 75,
        satuan: 'pcs',
        harga_satuan: 5000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang: 'BRG004',
        nama_barang: 'Beras Ramos 5Kg',
        expired_date: new Date('2026-06-01'),
        jumlah_barang: 30,
        satuan: 'sak',
        harga_satuan: 60000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kode_barang: 'BRG005',
        nama_barang: 'Minyak Goreng Bimoli 1L',
        expired_date: new Date('2025-11-20'),
        jumlah_barang: 40,
        satuan: 'botol',
        harga_satuan: 14000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbl_barangs', null, {});
  }
};
