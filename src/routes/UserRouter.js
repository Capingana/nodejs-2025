const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/users', UserController.index)
router.post('/users', UserController.store)



module.exports = router