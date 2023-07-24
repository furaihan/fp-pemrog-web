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
    // Modify the question column size to be 4096 characters
    await queryInterface.changeColumn('quizzes', 'question', {
      type: Sequelize.STRING(4096),
      allowNull: false,
      field: 'question',
    });
    // Modify the option_1 column size to be 4096 characters
    await queryInterface.changeColumn('quizzes', 'option_1', {
      type: Sequelize.STRING(4096),
      allowNull: false,
      field: 'option_1',
    });
    // Modify the option_2 column size to be 4096 characters
    await queryInterface.changeColumn('quizzes', 'option_2', {
      type: Sequelize.STRING(4096),
      allowNull: false,
      field: 'option_2',
    });
    // Modify the option_3 column size to be 4096 characters
    await queryInterface.changeColumn('quizzes', 'option_3', {
      type: Sequelize.STRING(4096),
      allowNull: false,
      field: 'option_3',
    }); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // Modify the question column size to be 255 characters
    await queryInterface.changeColumn('quizzes', 'question', {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'question',
    });
    // Modify the option_1 column size to be 255 characters
    await queryInterface.changeColumn('quizzes', 'option_1', {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'option_1',
    });
    // Modify the option_2 column size to be 255 characters
    await queryInterface.changeColumn('quizzes', 'option_2', {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'option_2',
    });
    // Modify the option_3 column size to be 255 characters
    await queryInterface.changeColumn('quizzes', 'option_3', {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'option_3',
    });
  }
};
