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
    await queryInterface.createTable("users", {
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "user_id",
      },
      account_id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        field: "account_id",
        references: {
          model: "accounts",
          key: "account_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "NO ACTION",
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "first_name",
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "last_name",
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: "username",
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
    await queryInterface.dropTable("users");
  },
};
