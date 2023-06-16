"use strict";
const { Model } = require("sequelize");
const joi = require("joi");
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
    static validate(model) {
      const schema = joi.object({
        username: joi.string().alphanum().min(3).max(30).required().messages({
          "string.empty": "Username cannot be empty",
          "string.alphanum":
            "Username must only contain alphanumeric characters",
          "string.min": "Username must be at least 3 characters long",
          "string.max": "Username cannot exceed 30 characters",
          "any.required": "Username is required",
        }),
        first_name: joi.string().trim().min(2).max(30).required().messages({
          "string.empty": "First name cannot be empty",
          "string.min": "First name must be at least 2 characters long",
          "string.max": "First name cannot exceed 30 characters",
          "any.required": "First name is required",
        }),
        last_name: joi.string().trim().min(2).max(30).required().messages({
          "string.empty": "Last name cannot be empty",
          "string.min": "Last name must be at least 2 characters long",
          "string.max": "Last name cannot exceed 30 characters",
          "any.required": "Last name is required",
        }),
      });
      return schema.validate(model);
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
