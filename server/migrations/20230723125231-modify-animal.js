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
    // Add new column to animals table
    // The column is latin_name, family_name, and order_name
    // type is string, allowNull is false, and default value is empty string
    // order_name is enum with values: carnivore, herbivore, omnivore, insectivore, and other
    await queryInterface.addColumn('animals', 'latin_name', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    });
    await queryInterface.addColumn('animals', 'family_name', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    });
    await queryInterface.addColumn('animals', 'order_name', {
      type: Sequelize.ENUM('carnivore', 'herbivore', 'omnivore', 'insectivore', 'other'),
      allowNull: true,
      defaultValue: null
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // Remove column latin_name, family_name, and order_name from animals table
    await queryInterface.removeColumn('animals', 'latin_name');
    await queryInterface.removeColumn('animals', 'family_name');
    await queryInterface.removeColumn('animals', 'order_name');
  }
};
