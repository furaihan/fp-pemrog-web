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
    queryInterface.renameTable('quizzes', 'questions')
    queryInterface.renameColumn('questions', 'quiz_id', 'question_id')
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.renameTable('questions', 'quizzes')
    queryInterface.renameColumn('quizzes', 'question_id', 'quiz_id')
  }
};
