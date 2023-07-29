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
    // Add column time to quizzes table
    await queryInterface.addColumn("quizzes", "time", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      field: "time",
    });
    // Add column detail_id to quiz_details table with uuid type
    await queryInterface.addColumn("quiz_details", "detail_id", {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: "detail_id",
      before: "quiz_id",
    });
    // Add column response_time to quiz_details table
    await queryInterface.addColumn("quiz_details", "response_time", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: "response_time",
    });
    // Add column is_correct to quiz_details table
    await queryInterface.addColumn("quiz_details", "is_correct", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: "is_correct",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // Remove column time from quizzes table
    await queryInterface.removeColumn("quizzes", "time");
    // Remove column detail_id from quiz_details table
    await queryInterface.removeColumn("quiz_details", "detail_id");
    // Remove column response_time from quiz_details table
    await queryInterface.removeColumn("quiz_details", "response_time");
    // Remove column is_correct from quiz_details table
    await queryInterface.removeColumn("quiz_details", "is_correct");
  },
};
