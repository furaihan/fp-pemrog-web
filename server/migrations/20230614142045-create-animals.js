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
      await queryInterface.createTable('animals', {
        animal_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          unique: true,
          field: 'animal_id',
        },
        animal_name: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'animal_name',
        },
        animal_type: {
          type: Sequelize.ENUM('cat', 'dog', 'bird', 'fish', 'reptile', 'other'),
          allowNull: false,
          field: 'animal_type',
        },
        animal_environment: {
          type: Sequelize.ENUM('ampibian', 'aquatic', 'desert', 'forest', 'grassland', 'mountain', 'polar', 'savanna', 'tundra', 'other'),
          allowNull: false,
          field: 'animal_environment',
        },
        animal_origin: {
          type: Sequelize.ENUM('africa', 'asia', 'australia', 'europe', 'north america', 'south america', 'other'),
          allowNull: false,
          field: 'animal_origin',
        },
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
      await queryInterface.dropTable('animals');
  }
};
