// Import the 'express' module for creating an instance of the router
import express from 'express'

// Import the property controller functions for handling API requests
import {
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyDetail,
  updateProperty,
} from '../controllers/property.controller.js'

// Create an instance of the router
const router = express.Router()

// Define the routes for handling API requests related to properties
router.route('/').get(getAllProperties) // GET /api/v1/properties
router.route('/:id').get(getPropertyDetail) // GET /api/v1/properties/:id
router.route('/').post(createProperty) // POST /api/v1/properties
router.route('/:id').patch(updateProperty) // PATCH /api/v1/properties/:id
router.route('/:id').delete(deleteProperty) // DELETE /api/v1/properties/:id

// Export the router for use in other modules
export default router
