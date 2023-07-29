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
    // Modify selected_option column in quiz_details table, add enum values timeout
    await queryInterface.changeColumn("quiz_details", "selected_option", {
      type: Sequelize.ENUM("option_1", "option_2", "option_3", "timeout"),
      allowNull: false,
      field: "selected_option",
    });
    // Make the is_correct column in quiz_details table nullable
    await queryInterface.changeColumn("quiz_details", "is_correct", {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      field: "is_correct",
    });
    // Make the response_time column in quiz_details table nullable
    await queryInterface.changeColumn("quiz_details", "response_time", {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: "response_time",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // Modify selected_option column in quiz_details table, remove enum values timeout
    await queryInterface.changeColumn("quiz_details", "selected_option", {
      type: Sequelize.ENUM("Option 1", "Option 2", "Option 3"),
      allowNull: false,
      field: "selected_option",
    });
    // Make the is_correct column in quiz_details table not nullable
    await queryInterface.changeColumn("quiz_details", "is_correct", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: "is_correct",
    });
    // Make the response_time column in quiz_details table not nullable
    await queryInterface.changeColumn("quiz_details", "response_time", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: "response_time",
    });
  },
};
