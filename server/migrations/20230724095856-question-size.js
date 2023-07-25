"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // Modify the question column size to be text
    await queryInterface.changeColumn("questions", "question", {
      type: Sequelize.TEXT,
      allowNull: false,
      field: "question",
    });
    // Modify the option_1 column size to be 2048 characters
    await queryInterface.changeColumn("questions", "option_1", {
      type: Sequelize.STRING(2048),
      allowNull: false,
      field: "option_1",
    });
    // Modify the option_2 column size to be 2048 characters
    await queryInterface.changeColumn("questions", "option_2", {
      type: Sequelize.STRING(2048),
      allowNull: false,
      field: "option_2",
    });
    // Modify the option_3 column size to be 2048 characters
    await queryInterface.changeColumn("questions", "option_3", {
      type: Sequelize.STRING(2048),
      allowNull: false,
      field: "option_3",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // Modify the question column size to be 255 characters
    await queryInterface.changeColumn("questions", "question", {
      type: Sequelize.STRING,
      allowNull: false,
      field: "question",
    });
    // Modify the option_1 column size to be 255 characters
    await queryInterface.changeColumn("questions", "option_1", {
      type: Sequelize.STRING,
      allowNull: false,
      field: "option_1",
    });
    // Modify the option_2 column size to be 255 characters
    await queryInterface.changeColumn("questions", "option_2", {
      type: Sequelize.STRING,
      allowNull: false,
      field: "option_2",
    });
    // Modify the option_3 column size to be 255 characters
    await queryInterface.changeColumn("questions", "option_3", {
      type: Sequelize.STRING,
      allowNull: false,
      field: "option_3",
    });
  },
};
