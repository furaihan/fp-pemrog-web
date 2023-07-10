"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kecamatan extends Model {
    static associate(models) {
      this.Kabupaten = this.belongsTo(models.Kabupaten, {
        foreignKey: {
          name: "id_kabupaten",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
      this.Kelurahan = this.hasMany(models.Kelurahan, {
        foreignKey: {
          name: "id_kecamatan",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
    }
  }
  Kecamatan.init(
    {
      id_kecamatan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "id_kecamatan",
      },
      nama_kecamatan: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "nama_kecamatan",
      },
    },
    {
      sequelize,
      modelName: "Kecamatan",
      tableName: "kecamatan",
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return Kecamatan;
};
