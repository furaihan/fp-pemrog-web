"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      this.Animal = this.belongsTo(models.Animal, {
        foreignKey: {
          name: "animal_id",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
      this.Quiz = this.belongsToMany(models.Quiz, {
        through: models.QuizDetail,
        foreignKey: "question_id",
      });
    }
  }
  Question.init(
    {
      question_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "question_id",
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "question",
      },
      option_1: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "option_1",
      },
      option_2: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "option_2",
      },
      option_3: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "option_3",
      },
      correct_answer: {
        type: DataTypes.ENUM("Option 1", "Option 2", "Option 3"),
        allowNull: false,
        field: "correct_answer",
      },
    },
    {
      sequelize,
      modelName: "Question",
      tableName: "questions",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Question;
};
