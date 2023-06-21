"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuizDetail extends Model {
    static associate(models) {
      this.Quiz = this.belongsTo(models.Quiz, {
        foreignKey: {
          name: "quiz_id",
          allowNull: false,
          type: DataTypes.UUID,
        },
      });
      this.Question = this.belongsTo(models.Question, {
        foreignKey: {
          name: "question_id",
          allowNull: false,
          type: DataTypes.UUID,
        },
      });
    }
  }
  QuizDetail.init(
    {
      selected_option: {
        type: DataTypes.ENUM("Option 1", "Option 2", "Option 3"),
        allowNull: false,
        field: "selected_option",
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
