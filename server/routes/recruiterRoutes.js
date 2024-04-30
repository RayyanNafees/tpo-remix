import { Router } from 'express'
import {
  registerRecruiter,
  verifyRecruiterEmail,
  loginRecruiter,
  approveUser,
} from '../controllers/recruiterController.js'
import { authenticateRecruiterToken } from '../middleware/jwtmiddleware.js'

export default Router()
  .post('/register-recruiter', registerRecruiter)
  .post('/verify-recruiter', verifyRecruiterEmail)
  .post('/login-recruiter', loginRecruiter)

  .get('/approve-user/:userId', authenticateRecruiterToken, approveUser)
