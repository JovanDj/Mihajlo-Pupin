const Sequelize = require('sequelize')
const db = require('../config/database')

const Student = db.define('student', {
  broj_indeksa: {
    type: Sequelize.STRING

  },
  ime_studenta: {
    type: Sequelize.STRING

  },
  prezime_studenta: {
    type: Sequelize.STRING

  }
}, {
  timestamps: false
})

module.exports = Student
