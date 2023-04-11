// Import the 'express' module for creating an instance of the router
import express from 'express'

// Import the user controller functions for handling API requests
import {
  createUser,
  getAllUsers,
  getUserInfoByID,
} from '../controllers/user.controller.js'

// Create an instance of the router
const router = express.Router()

// Define the routes for handling API requests related to users
router.route('/').get(getAllUsers) // GET /api/v1/users
router.route('/').post(createUser) // POST /api/v1/users
router.route('/:id').get(getUserInfoByID) // GET /api/v1/users/:id

// Export the router for use in other modules
export default router
