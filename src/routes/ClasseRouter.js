const express = require('express')
const router = express.Router()
const ClasseController = require('../controllers/ClasseController')


router.get('/classes', ClasseController.getAllCurso)
router.get('/classes/:id', ClasseController.showClasseById)





module.exports = router