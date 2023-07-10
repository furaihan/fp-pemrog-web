"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("kelurahan", {
      id_kelurahan: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
        primaryKey: true,
      },
      id_provinsi: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "kecamatan",
          key: "id_provinsi",
        },
      },
      id_kabupaten: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "kecamatan",
          key: "id_kabupaten",
        },
      },
      id_kecamatan: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "kecamatan",
          key: "id_kecamatan",
        },
      },
      nama_kelurahan: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("kelurahan");
  },
};
