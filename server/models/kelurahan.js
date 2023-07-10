"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kelurahan extends Model {
    static associate(models) {
      this.Kecamatan = this.belongsTo(models.Kecamatan, {
        foreignKey: {
          name: "id_kecamatan",
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
    }
  }
  Kelurahan.init(
    {
      id_kelurahan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "id_kelurahan",
      },
      nama_kelurahan: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "nama_kelurahan",
      },
    },
    {
      sequelize,
      modelName: "Kelurahan",
      tableName: "kelurahan",
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return Kelurahan;
};
