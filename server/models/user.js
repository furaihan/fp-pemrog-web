"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
        User.belongsTo(models.Accounts, {
            foreignKey: "account_id",
            targetKey: "account_id",
            as: "account",
        });
    }
  }
  User.init(
    {
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "user_id",
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name",
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "last_name",
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "username",
      },
    },
    {
      sequelize,
      modelName: "users",
      freezeTableName: true,
      timestamps: false,
    }
  );
};
