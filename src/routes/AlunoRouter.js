const express = require('express')
const router = express.Router()
const AlunoController = require('../controllers/AlunoController')

router.get('/alunos', AlunoController.getAllStudents)
router.get('/alunos/:id', AlunoController.showStudentById)


module.exports = router