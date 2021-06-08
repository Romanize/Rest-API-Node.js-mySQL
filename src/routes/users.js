const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/', userController.list)
router.get('/:id', userController.single)

router.post('/', userController.add)
router.put('/:id', userController.update)

router.delete('/:id', userController.delete)

module.exports = router;