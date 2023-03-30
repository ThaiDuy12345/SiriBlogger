import express from 'express'
import { getImage } from '../controller/image'
const routes = express.Router()

routes.get("/getImage/:Id", getImage)

export default routes