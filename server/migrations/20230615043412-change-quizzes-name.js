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
    await queryInterface.renameTable('quizzes', 'questions')
    await queryInterface.renameColumn('questions', 'quiz_id', 'question_id')
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameTable('questions', 'quizzes')
    await queryInterface.renameColumn('quizzes', 'question_id', 'quiz_id')
  }
};
