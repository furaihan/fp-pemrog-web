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
    await queryInterface.createTable('accounts', {
      account_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: 'account_id',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'email',
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      
  });
},

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('accounts');
  }
};
