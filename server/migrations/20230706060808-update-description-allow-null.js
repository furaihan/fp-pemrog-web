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
    await queryInterface.changeColumn("descriptions", "description", {
      type: Sequelize.TEXT,
      allowNull: true,
      field: "description",
    });
    await queryInterface.changeColumn("descriptions", "fun_fact", {
      type: Sequelize.TEXT,
      allowNull: true,
      field: "fun_fact",
    });
    await queryInterface.changeColumn("descriptions", "image", {
      type: Sequelize.STRING,
      allowNull: true,
      field: "image",
    });
    await queryInterface.changeColumn("descriptions", "title", {
      type: Sequelize.STRING,
      allowNull: true,
      field: "title",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn("descriptions", "description", {
      type: Sequelize.TEXT,
      allowNull: false,
      field: "description",
    });
    await queryInterface.changeColumn("descriptions", "fun_fact", {
      type: Sequelize.TEXT,
      allowNull: false,
      field: "fun_fact",
    });
    await queryInterface.changeColumn("descriptions", "image", {
      type: Sequelize.STRING,
      allowNull: false,
      field: "image",
    });
    await queryInterface.changeColumn("descriptions", "title", {
      type: Sequelize.STRING,
      allowNull: false,
      field: "title",
    });
  },
};
