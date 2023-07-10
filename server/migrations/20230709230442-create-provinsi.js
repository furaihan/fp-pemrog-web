'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('provinsi', {
      id_provinsi: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        primaryKey: true
      },
      nama_provinsi: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('provinsi');
  }
};
