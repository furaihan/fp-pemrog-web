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
      await queryInterface.createTable('descriptions', {
        description_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          unique: true,
          field: 'description_id',
        },
        animal_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          field: 'animal_id',
          references: {
            model: 'animals',
            key: 'animal_id',
          },
          onUpdate: 'RESTRICT',
          onDelete: 'NO ACTION',
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'title',
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
          field: 'description',
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'image',
        },
        fun_fact: {
          type: Sequelize.TEXT,
          allowNull: false,
          field: 'fun_fact',
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
      await queryInterface.dropTable('descriptions');
  }
};
