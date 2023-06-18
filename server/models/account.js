"use strict";
const { Model } = require("sequelize");
const joi = require("joi");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      // define association here
      this.User = this.hasOne(models.Users, {
        foreignKey: {
          name: "account_id",
          allowNull: false,
          type: DataTypes.UUID,
        },
      });
    }
    static validate(model) {
      const schema = joi.object({
        email: joi.string()
          .email({ tlds: { allow: false } }) // Enforces email format without allowing TLDs like .com
          .required()
          .messages({
            'string.empty': 'Email cannot be empty',
            'string.email': 'Email is not valid',
            'any.required': 'Email is required',
          }),
        password: joi.string()
          .min(8)
          .required()
          .messages({
            'string.empty': 'Password cannot be empty',
            'string.min': 'Password must be at least 8 characters long',
            'any.required': 'Password is required',
          }),
      });
      return schema.validate(model);
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
