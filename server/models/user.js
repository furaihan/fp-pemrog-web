"use strict";
const { Model } = require("sequelize");
const joi = require("joi");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.belongsTo(models.Account, {
        foreignKey: "account_id",
        targetKey: "account_id",
        as: "account",
      });
    }
    static validate(model) {
      const schema = joi.object({
        username: joi.string().alphanum().min(3).max(30).required().messages({
          "string.empty": "Username tidak boleh kosong",
          "string.alphanum": "Username hanya boleh mengandung huruf dan angka",
          "string.min": "Username setidaknya 3 karakter",
          "string.max": "Username tidak boleh lebih dari 30 karakter",
          "any.required": "Username dibutuhkan",
        }),
        first_name: joi.string().trim().min(2).max(30).messages({
          "string.empty": "Nama depan tidak boleh kosong",
          "string.min": "Nama depan setidaknya 2 karakter",
          "string.max": "Nama depan tidak boleh lebih dari 30 karakter",
        }),
        last_name: joi.string().trim().min(2).max(30).messages({
          "string.empty": "Nama belakang tidak boleh kosong",
          "string.min": "Nama belakang setidaknya 2 karakter",
          "string.max": "Nama belakang tidak boleh lebih dari 30 karakter",
        }),
        address: joi.string().trim().min(2).max(255).messages({
          "string.min": "Alamat setidaknya 2 karakter",
          "string.max": "Alamat tidak boleh lebih dari 255 karakter",
        }),
        phone: joi.string().trim().pattern(/^(0|\+62)(\d{8,15})$/).messages({
          "string.pattern.base": "Nomor telepon tidak valid",
        }),
        bio: joi.string().trim().min(2).max(1023).messages({
          "string.min": "Bio setidaknya 2 karakter",
          "string.max": "Bio tidak boleh lebih dari 1023 karakter",
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
        allowNull: true,
        defaultValue: null,
        field: "first_name",
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        field: "last_name",
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "username",
      },
      address:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        field: "address",
      },
      phone:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        field: "phone",
      },
      bio:{
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        field: "bio",
      }
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    }
  );
  return User;
};
