import { Router } from 'express'
import {
  registerUser,
  verifyUserEmail,
  loginUser,
  getsomething,
} from '../controllers/userController.js'
import { authenticateToken } from '../middleware/jwtmiddleware.js'

export default Router()
  .post('/register-user', registerUser)
  .post('/verify-user', verifyUserEmail)
  .post('/login-user', loginUser)

  .get('/data', authenticateToken, getsomething)
