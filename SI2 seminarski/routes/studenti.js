const express = require('express')
const router = express.Router()
const Student = require('../models/student')

/* GET users listing. */
router.get('/', (req, res, next) => {
  Student.findAll().then(studenti => {
    console.log(studenti)
    res.sendStatus(200)
  })
})

module.exports = router
