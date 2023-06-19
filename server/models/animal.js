"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
      this.Quiz = this.hasMany(models.Quiz, {
        foreignKey: {
          name: "animal_id",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
      this.Description = this.hasOne(models.Description, {
        foreignKey: {
          name: "animal_id",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
    }
  }
  Animal.init(
    {
      animal_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "animal_id",
      },
      animal_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "animal_name",
      },
      animal_type: {
        type: DataTypes.ENUM("cat", "dog", "bird", "fish", "reptile", "other"),
        allowNull: false,
        field: "animal_type",
      },
      animal_environment: {
        type: DataTypes.ENUM(
          "ampibian",
          "aquatic",
          "desert",
          "forest",
          "grassland",
          "mountain",
          "polar",
          "savanna",
          "tundra",
          "other"
        ),
        allowNull: false,
        field: "animal_environment",
      },
      animal_origin: {
        type: DataTypes.ENUM(
          "africa",
          "asia",
          "australia",
          "europe",
          "north america",
          "south america",
          "other"
        ),
        allowNull: false,
        field: "animal_origin",
      },
    },
    {
      sequelize,
      modelName: "Animal",
      tableName: "animals",
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return Animal;
};
