import { Router } from 'express'
import {
  registerAdmin,
  verifyAdminEmail,
  loginAdmin,
  approveUser,
} from '../controllers/adminController.js'
import { authenticateAdminToken } from '../middleware/jwtmiddleware.js'

export default Router()
  .post('/register-admin', registerAdmin)
  .post('/verify-admin', verifyAdminEmail)
  .post('/login-admin', loginAdmin)
  
  .get('/approve-user/:userId', authenticateAdminToken, approveUser)
