import { Router } from 'express'
import {
  applyForJob,
  createJob,
  viewJobs,
  getJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js'
import { authenticateAdminToken, authenticateToken } from '../middleware/jwtmiddleware.js'

export default Router()
  .get('/', viewJobs)
  .post('/', authenticateAdminToken, createJob)

  .get('/:jobId', getJob)
  .put('/:jobId', authenticateAdminToken, updateJob)
  .delete('/:jobId', authenticateAdminToken, deleteJob)

  .post('/:jobId/apply', authenticateToken, applyForJob);
