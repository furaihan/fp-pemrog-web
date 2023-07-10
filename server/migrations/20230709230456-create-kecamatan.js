"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("kecamatan", {
      id_kecamatan: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        primaryKey: true,
      },
      id_provinsi: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "kabupaten",
          key: "id_provinsi",
        },
      },
      id_kabupaten: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "kabupaten",
          key: "id_kabupaten",
        },
      },
      nama_kecamatan: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("kecamatan");
  },
};
