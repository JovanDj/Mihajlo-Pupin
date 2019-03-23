const express = require('express')
const router = express.Router()
const sequelize = require('../config/database')

/* GET users listing. */
router.get('/', (req, res, next) => {
  sequelize.query(
    'SELECT * FROM student INNER JOIN predavanje ON student.ID_STUDENTA = predavanje.ID_STUDENTA'
    , { type: sequelize.QueryTypes.SELECT }).then(studenti => {
    console.log(studenti)
    res.render('studenti', { studenti })
  })
})

module.exports = router
