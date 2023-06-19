"use strict";
const { Model } = require("sequelize");
const joi = require("joi");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      // define association here
      this.User = this.hasOne(models.User, {
        foreignKey: {
          name: "account_id",
          allowNull: false,
          type: DataTypes.UUID,
        },
      });
    }
    static validate(model) {
      const schema = joi.object({
        email: joi.string().trim().email().required().messages({
          "string.empty": "Email tidak boleh kosong",
          "string.email": "Email tidak valid",
          "any.required": "Email dibutuhkan",
        }),
        password: joi.string().min(8).max(30).required().messages({
          "string.empty": "Password tidak boleh kosong",
          "string.min": "Password setidaknya 8 karakter",
          "string.max": "Password maksimal 30 karakter",
          "any.required": "Password dibutuhkan",
        }),
        confirm_password: joi.valid(joi.ref("password")).messages({
          "any.only": "Password tidak cocok",
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
      modelName: "Account",
      tableName: "accounts",
      freezeTableName: true,
      underscored: true,
      timestamps: false,
      
    }
  );
  return Account;
};
