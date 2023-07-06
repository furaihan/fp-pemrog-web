'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('users', 'bio', {
      type: Sequelize.TEXT,
      allowNull: true,
      defaultValue: null,
      field: "bio",
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('users', 'bio', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      field: "bio",
    });
  }
};
