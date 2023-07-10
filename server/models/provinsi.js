"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provinsi extends Model {
    static associate(models) {
      this.Kabupaten = this.hasMany(models.Kabupaten, {
        foreignKey: {
          name: "id_provinsi",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
    }
  }
  Provinsi.init(
    {
      id_provinsi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "id_provinsi",
      },
      nama_provinsi: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "nama_provinsi",
      },
    },
    {
      sequelize,
      modelName: "Provinsi",
      tableName: "provinsi",
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return Provinsi;
};
