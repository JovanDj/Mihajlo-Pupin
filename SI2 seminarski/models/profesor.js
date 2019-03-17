'use strict'
module.exports = (sequelize, DataTypes) => {
  const Profesor = sequelize.define('Profesor', {
    ime_profesora: { type: DataTypes.STRING(20), allowNull: false, defaultValue: false },
    prezime_profesora: { type: DataTypes.STRING(30), allowNull: false, defaultValue: false }

  }, {})
  Profesor.associate = function (models) {
    Profesor.hasMany(models.Predmet)
  }
  return Profesor
}
