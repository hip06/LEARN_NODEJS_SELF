import * as controllers from '../controllers'
import express from 'express'

const router = express.Router()

router.post('/register', controllers.register)
router.post('/login', controllers.login)
router.post('/refresh-token', controllers.refreshTokenController)


module.exports = router