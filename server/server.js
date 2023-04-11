// Import the 'cors' middleware for enabling Cross-Origin Resource Sharing
import cors from 'cors'

// Import the 'connectDB' function for connecting to MongoDB
import connectDB from './mongodb/connect.js'

// Import the user and property routers
import userRouter from './routes/user.routes.js'
import propertyRouter from './routes/property.routes.js'

// Import the 'dotenv' module for loading environment variables
dotenv.config()

// Create an instance of the Express application
const app = express()

// Set the server port number
const port = process.env.PORT_NUMBER

// Enable 'cors' middleware for all routes
app.use(cors())

// Enable the 'json' middleware for parsing JSON request bodies
app.use(express.json({ limit: '50mb' }))

// Define a simple route for testing the server
app.get('/', (req, res) => {
  res.send({ message: 'Express server running!' })
})

// Use the user and property routers for handling API requests
app.use('/api/v1/users', userRouter)
app.use('/api/v1/properties', propertyRouter)

// Define an asynchronous function for starting the server
const startServer = async () => {
  try {
    // Connect to the MongoDB database
    connectDB(process.env.MONGODB_URL)

    // Start the server and log a message to the console
    app.listen(port, () =>
      console.log(`[SERVER]: Server started http://localhost:${port}`)
    )
  } catch (error) {
    // Log any errors that occur during server startup
    console.log(error)
  }
}

// Call the 'startServer' function to start the server
startServer()

// Export the 'app' object for testing purposes
export default app
