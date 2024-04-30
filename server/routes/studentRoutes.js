import { Router } from 'express'
import {
  createProfile,
  allProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
} from '../controllers/studentController.js'

import {
  authenticateAdminToken,
  authenticateToken,
} from '../middleware/jwtmiddleware.js'

export default Router()
  .get('/', allProfiles)
  .post('/', authenticateToken, createProfile)

  .get('/:profileId', getProfile)
  .put('/:profileId', authenticateToken, updateProfile)
  .delete('/:profileId', authenticateAdminToken, deleteProfile);
