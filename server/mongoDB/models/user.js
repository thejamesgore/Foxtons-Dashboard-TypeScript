// Import the 'mongoose' module for defining the user schema and creating the model
import mongoose from 'mongoose'

// Define the user schema using Mongoose
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
  allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
})

// Create the user model using the user schema
const userModel = mongoose.model('User', UserSchema)

// Export the user model for use in other modules
export default userModel
