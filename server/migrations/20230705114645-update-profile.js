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
    await queryInterface.addColumn("users", "bio", {
      type: Sequelize.STRING,
      allowNull: true,
      field: "bio",
      defaultValue: null,
    });
    await queryInterface.addColumn("users", "address", {
      type: Sequelize.STRING,
      allowNull: true,
      field: "address",
      defaultValue: null,
    });
    await queryInterface.addColumn("users", "phone", {
      type: Sequelize.STRING,
      allowNull: true,
      field: "phone",
      defaultValue: null,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("users", "bio");
    await queryInterface.removeColumn("users", "address");
    await queryInterface.removeColumn("users", "phone");
  },
};
