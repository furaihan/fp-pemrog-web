"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      // define association here
      this.User = this.hasOne(models.Users, {
        foreignKey: {
          name: "account_id",
          allowNull: false,
          type: DataTypes.UUID
        },
      });
    }
  }
  Account.init(
    {
      account_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "account_id",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "email",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "password",
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "accounts",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Account;
};
