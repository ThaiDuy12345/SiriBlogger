//* import all packages

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import accountRoutes from './routes/account'
import postRoutes from './routes/post'
import imageRoutes from './routes/image'
dotenv.config()

//* settings up and configuration 

const app = express()
app.use(
    cors({
        origin: 'http://localhost:4200',
        methods: ["GET", "POST", "PUT", "DELETE"]
    })
)

app.use(express.json())
const port = 5000

//* running the expressjs server

app.listen(port, () => {
    console.log(`Server running successfully at ${port}`)
})
app.get("/", (req: express.Request, res: express.Response) => {
    res.send("This is SiriBlogger backend server, its running successfully")
})
app.use("/api/account", accountRoutes)
app.use("/api/post", postRoutes)
app.use("/api/image", imageRoutes)
//* connect to mongodb

const uri = `mongodb+srv://${process.env.MGDBACCOUNT}:${process.env.MGDBPASSWORD}@cluster0.jsirxs0.mongodb.net/SiriBlogger?retryWrites=true&w=majority`


mongoose.connect(uri)



