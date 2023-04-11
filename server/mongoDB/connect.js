// Import the 'mongoose' module for connecting to MongoDB
import mongoose from 'mongoose'

// Define a function for connecting to the MongoDB database
const connectDB = (url) => {
  // Enable strict mode for database queries
  mongoose.set('strictQuery', true)

  // Connect to the MongoDB database using the provided URL
  mongoose
    .connect(url)
    .then(() => {
      // Log a success message to the console if the connection is successful
      console.log('MongoDB Connected!')
    })
    .catch((error) => console.log(error))
}

// Export the 'connectDB' function for use in other modules
export default connectDB
