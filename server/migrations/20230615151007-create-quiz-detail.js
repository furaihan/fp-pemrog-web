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
    await queryInterface.changeColumn("questions", "question_id", {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      field: "question_id",
    });
    await queryInterface.createTable("quiz_details", {
      quiz_id: {
        type: Sequelize.UUID,
        allowNull: false,
        field: "quiz_id",
        references: {
          model: "quizzes",
          key: "quiz_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "NO ACTION",
      },
      question_id: {
        type: Sequelize.UUID,
        allowNull: false,
        field: "question_id",
        references: {
          model: "questions",
          key: "question_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "NO ACTION",
      },
      selected_option: {
        type: Sequelize.ENUM("Option 1", "Option 2", "Option 3"),
        allowNull: true,
        defaultValue: null,
        field: "selected_option",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable("quiz_details");
  },
};
