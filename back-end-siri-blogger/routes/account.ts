import express from 'express'
import multer from 'multer'
import {
    getAllAccount,
    getAccount,
    deleteAccount,
    updateAccount,
    createAccount,
    getAccountByEmailAndPassword,
    loadImage
} from '../controller/account'
const routes = express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + " - " + file.originalname)
    }
})
const upload = multer({storage:storage})

routes.get("/", getAllAccount)
routes.get("/getAccount/:Id", getAccount)
routes.delete("/deleteAccount", deleteAccount)
routes.post("/createAccount", createAccount)
routes.put("/updateAccount", updateAccount)
routes.post("/getAccountByEmailAndPassword", getAccountByEmailAndPassword)
routes.post("/loadImage",upload.single("file"), loadImage)
export default routes