import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'
import userRouter from './routes/user.routes.js'
import propertyRouter from './routes/property.routes.js'

dotenv.config()

const app = express()
const port = process.env.PORT_NUMBER

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', (req, res) => {
  res.send({ message: 'Express server running!' })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/properties', propertyRouter)

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL)

    app.listen(port, () =>
      console.log(`[SERVER]: Server started http://localhost:${port}`)
    )
  } catch (error) {
    console.log(error)
  }
}

startServer()

export default app
