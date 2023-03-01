import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb ' }))

app.get('/', (req, res) => {
  res.send({ message: 'Express server running!' })
})

const startServer = async () => {
  try {
    app.listen(8080, () => {
      console.log('[SERVER]: Server started http://localhost:8080')
    })
  } catch (error) {
    console.log(error)
  }
}

startServer()

export default app
