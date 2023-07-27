"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
      this.Questions = this.hasMany(models.Question, {
        foreignKey: {
          name: "animal_id",
          allowNull: false,
          type: DataTypes.UUID,
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
        type: DataTypes.ENUM("unique", "extinct", "rare"),
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
      latin_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "latin_name",
      },
      family_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "family_name",
      },
      order_name: {
        type: DataTypes.ENUM(
          "carnivore",
          "herbivore",
          "omnivore",
          "insectivore",
          "other"
        ),
        allowNull: true,
        defaultValue: null,
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
