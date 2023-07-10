'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("wilayah", {
      kode: {
        type: Sequelize.STRING(13),
        allowNull: false,
        primaryKey: true,
      },
      nama: {
        type: Sequelize.STRING(100),
        defaultValue: null,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("wilayah");
  },
};
