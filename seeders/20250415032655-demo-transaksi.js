'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_transaksis', [
      {
        no_transaksi: 'TRX001',
        tgl_transaksi: new Date('2025-04-01'),
        Nama_kasir: 'Kasir Satu',
        total_bayar: 30000,
        id_user: 1, 
        id_pelanggan: 2,
        id_barang: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_transaksi: 'TRX002',
        tgl_transaksi: new Date('2025-04-02'),
        Nama_kasir: 'Kasir Dua',
        total_bayar: 60000,
        id_user: 2, // ID kasir lainnya
        id_pelanggan: 2,
        id_barang: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_transaksi: 'TRX003',
        tgl_transaksi: new Date('2025-04-03'),
        Nama_kasir: 'Kasir Satu',
        total_bayar: 15000,
        id_user: 3,
        id_pelanggan: 3,
        id_barang: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_transaksi: 'TRX004',
        tgl_transaksi: new Date('2025-04-04'),
        Nama_kasir: 'Kasir Dua',
        total_bayar: 10000,
        id_user: 4,
        id_pelanggan: 4,
        id_barang: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_transaksi: 'TRX005',
        tgl_transaksi: new Date('2025-04-05'),
        Nama_kasir: 'Kasir Satu',
        total_bayar: 14000,
        id_user: 5,
        id_pelanggan: 5,
        id_barang: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbl_transaksis', null, {});
  }
};
