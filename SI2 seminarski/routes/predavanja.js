const express = require('express')
const router = express.Router()
const sequelize = require('../sequelize')

router.get('/dodaj', async (req, res, next) => {
  const studenti = await sequelize.query(`SELECT * FROM student`, { type: sequelize.QueryTypes.SELECT })
  const predmeti = await sequelize.query(`SELECT * FROM predmet`, { type: sequelize.QueryTypes.SELECT })
  const profesori = await sequelize.query(`SELECT * FROM profesor`, { type: sequelize.QueryTypes.SELECT })

  console.log({ studenti, predmeti, profesori })
  res.render('dodaj-predavanje', { studenti, predmeti, profesori })
})

router.post('/dodaj', (req, res) => {
  const predavanje = req.body
  console.log(predavanje)

  sequelize.query(`INSERT INTO predavanje(ID_STUDENTA, ID_PREDMETA, ID_PROFESORA, PRISUTNOST) VALUES("${predavanje.student}", "${predavanje.predmet}", "${predavanje.profesor}", "${predavanje.prisutnost}")`, { type: sequelize.QueryTypes.INSERT }).then(predavanje => {
    console.log(predavanje)
    res.redirect('/studenti')
  }).catch(err => res.send(err))
})

module.exports = router
