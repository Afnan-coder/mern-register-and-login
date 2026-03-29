import express from "express"
import cors from 'cors'
import userRoutes from './routes/UserRoute.js' 
import connectDB from "./config/db.js"


const app = express()

await connectDB()


app.use(express.json())
app.use(cors())

app.use('/api', userRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
