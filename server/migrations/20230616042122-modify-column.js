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
    await queryInterface.changeColumn("users", "first_name", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      field: "first_name",
    });
    await queryInterface.changeColumn("users", "last_name", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      field: "last_name",
    });
    await queryInterface.sequelize.query(
      "ALTER TABLE `users` CHANGE `username` `username` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL AFTER `account_id`;"
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn("users", "first_name", {
      type: Sequelize.STRING,
      allowNull: false,
      field: "first_name",
    });
    await queryInterface.changeColumn("users", "last_name", {
      type: Sequelize.STRING,
      allowNull: false,
      field: "last_name",
    });
    await queryInterface.sequelize.query(
      "ALTER TABLE `users` CHANGE `username` `username` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL AFTER `last_name`;"
    );
  },
};
