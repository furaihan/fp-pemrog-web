"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    static associate(models) {
      this.User = this.belongsTo(models.User, {
        foreignKey: {
          name: "user_id",
          allowNull: false,
          type: DataTypes.UUID,
        },
      });
      this.Animal = this.belongsTo(models.Animal, {
        foreignKey: {
          name: "animal_id",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
      this.QuizDetail = this.hasMany(models.QuizDetail, {
        foreignKey: {
          name: "quiz_id",
          allowNull: false,
          type: DataTypes.UUID,
        },
      });
    }
  }
  Quiz.init(
    {
      quiz_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "quiz_id",
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "score",
      },
    },
    {
      sequelize,
      modelName: "quizzes",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Quiz;
};
