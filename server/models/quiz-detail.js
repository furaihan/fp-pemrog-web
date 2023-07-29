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
        type: DataTypes.ENUM("Option 1", "Option 2", "Option 3"),
        allowNull: false,
        field: "selected_option",
      },
      response_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: "response_time",
      },
      is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
