"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("kabupaten", {
      id_kabupaten: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        primaryKey: true,
      },
      id_provinsi: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "provinsi",
          key: "id_provinsi",
        },
      },
      nama_kabupaten: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("kabupaten");
  },
};
