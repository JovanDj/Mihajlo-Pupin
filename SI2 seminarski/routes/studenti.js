const express = require('express')
const router = express.Router()
const sequelize = require('../sequelize')

/* GET users listing. */
router.get('/', (req, res, next) => {
  sequelize.query(
    `SELECT * FROM student
    INNER JOIN
    predavanje ON student.ID_STUDENTA = predavanje.ID_STUDENTA
    INNER JOIN
    predmet ON predavanje.ID_PREDMETA = predmet.ID_PREDMETA
    INNER JOIN
    profesor ON predavanje.ID_PROFESORA = profesor.ID_PROFESORA
    `
    , { type: sequelize.QueryTypes.SELECT }).then(studenti => {
    console.log(studenti)
    res.render('studenti', { studenti })
  })
})

router.get('/dodaj', (req, res) => {
  res.render('dodaj-studenta')
})

router.post('/dodaj', (req, res) => {
  const student = req.body

  sequelize.query(`INSERT INTO student(IME_STUDENTA, PREZIME_STUDENTA, BROJ_INDEKSA) VALUES("${student.ime_studenta}", "${student.prezime_studenta}", "${student.broj_indeksa}")`, { type: sequelize.QueryTypes.INSERT }).then(student => {
    res.redirect('/studenti')
  })
})

module.exports = router
