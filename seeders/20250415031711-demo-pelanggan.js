'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_pelanggans', [
      {
        nama: "Mahesa",
        telepon: "085722472764",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Budi Hartono",
        telepon: "081234567890",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Siti Aminah",
        telepon: "082112345678",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Dedi Susanto",
        telepon: "083845672198",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Ayu Lestari",
        telepon: "087654321987",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbl_pelanggans', null, {});
  }
};
