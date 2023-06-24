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
    await queryInterface.createTable('quizzes', {
      quiz_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: 'quiz_id',
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'user_id',
        },
        onUpdate: 'RESTRICT',
        onDelete: 'NO ACTION',
      },
      animal_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'animal_id',
        references: {
          model: 'animals',
          key: 'animal_id',
        },
        onUpdate: 'RESTRICT',
        onDelete: 'NO ACTION',
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'score',
        defaultValue: 0,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('quizzes');
  }
};
