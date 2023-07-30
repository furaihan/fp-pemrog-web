"use strict";
const { Model } = require("sequelize");
const { Question, Quiz } = require("../models");
module.exports = (sequelize, DataTypes) => {
  class QuizDetail extends Model {}
  QuizDetail.init(
    {
      detail_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: "detail_id",
      },
      quiz_id: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "quiz_id",
        references: {
          model: Quiz,
          key: "quiz_id",
        },
      },
      question_id: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "question_id",
        references: {
          model: Question,
          key: "question_id",
        },
      },
      selected_option: {
        type: DataTypes.ENUM("option_1", "option_2", "option_3", "timeout"),
        allowNull: false,
        field: "selected_option",
      },
      response_time: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        field: "response_time",
      },
      is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
        field: "is_correct",
      },
    },
    {
      sequelize,
      modelName: "QuizDetail",
      tableName: "quiz_details",
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return QuizDetail;
};
