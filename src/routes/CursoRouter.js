const express = require('express')
const router = express.Router()
const CursoController = require('../controllers/CursoController')

router.get('/cursos', CursoController.index)
router.post('/cursos', CursoController.store)
router.get('/curso/:id',CursoController.show)
router.patch('/curso/:id',CursoController.update)
router.delete('/curso/:id',CursoController.destroy)
router.get('/cursos-ativos', CursoController.ativos)

module.exports = router