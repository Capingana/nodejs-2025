const express = require('express')
const router = express.Router()
const AnoLectivoController = require('../controllers/AnoLectivoController')


router.get('/ano-lectivo', AnoLectivoController.index)


module.exports = router