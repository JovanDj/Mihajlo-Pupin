const express = require('express')
const router = express.Router()
const Student = require('../models/student')
const sequelize = require('../config/database')

/* GET home page. */
router.get('/', function (req, res, next) {
  sequelize.query('SELECT * FROM student', { model: Student, raw: true }).then(studenti => {
    console.log(studenti)
    res.render('index', { studenti })
  }).catch(err => {
    res.send(err)
  })
})

module.exports = router
