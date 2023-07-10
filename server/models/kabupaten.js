"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kabupaten extends Model {
    static associate(models) {
      this.Provinsi = this.belongsTo(models.Provinsi, {
        foreignKey: {
          name: "id_provinsi",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
      this.Kecamatan = this.hasMany(models.Kecamatan, {
        foreignKey: {
          name: "id_kabupaten",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
    }
  }
  Kabupaten.init(
    {
      id_kabupaten: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "id_kabupaten",
      },
      nama_kabupaten: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "nama_kabupaten",
      },
    },
    {
      sequelize,
      modelName: "Kabupaten",
      tableName: "kabupaten",
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return Kabupaten;
};
