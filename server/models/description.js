"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Description extends Model {
    static associate(models) {
      this.Animal = this.belongsTo(models.Animal, {
        foreignKey: {
          name: "animal_id",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
    }
  }
  Description.init(
    {
      description_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "description_id",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "title",
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "description",
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "image",
      },
      fun_fact: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "fun_fact",
      },
    },
    {
      sequelize,
      modelName: "Description",
      tableName: "descriptions",
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return Description;
};
