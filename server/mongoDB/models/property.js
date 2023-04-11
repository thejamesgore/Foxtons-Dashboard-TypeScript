// Import the 'mongoose' module for defining the property schema and creating the model
import mongoose from 'mongoose'

// Define the property schema using Mongoose
const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  propertyType: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  photo: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

// Create the property model using the property schema
const propertyModel = mongoose.model('Property', PropertySchema)

// Export the property model for use in other modules
export default propertyModel
