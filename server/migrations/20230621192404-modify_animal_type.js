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
    await queryInterface.changeColumn("animals", "animal_type", {
      type: Sequelize.ENUM("unique", "extinct", "rare"),
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn("animals", "animal_type", {
      type: Sequelize.ENUM("cat", "dog", "bird", "fish", "reptile", "other"),
      allowNull: false
    });
  }
};
