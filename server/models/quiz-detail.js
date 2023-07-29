"use strict";
const { Model } = require("sequelize");
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
