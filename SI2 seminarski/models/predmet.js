'use strict'
module.exports = (sequelize, DataTypes) => {
  const Predmet = sequelize.define('Predmet', {
    naziv: { type: DataTypes.STRING(20), allowNull: false, defaultValue: false }

  }, {})
  Predmet.associate = function (models) {
  }
  return Predmet
}
