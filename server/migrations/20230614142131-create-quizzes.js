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
        question: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'question',
        },
        option_1: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'option_1',
        },
        option_2: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'option_2',
        },
        option_3: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'option_3',
        },
        correct_answer: {
          type: Sequelize.ENUM('option_1', 'option_2', 'option_3'),
          allowNull: false,
          field: 'correct_answer',
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
      await queryInterface.dropTable('quizzes');
  }
};
