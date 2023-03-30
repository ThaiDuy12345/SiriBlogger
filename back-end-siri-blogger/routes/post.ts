import express from 'express'
import multer from 'multer'
import {
    getAllPost,
    getPost,
    deletePost,
    updatePost,
    createPost,
    loadImage
} from '../controller/post'
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
routes.get("/", getAllPost)
routes.get("/getPost/:Id", getPost)
routes.delete("/deletePost", deletePost)
routes.post("/createPost", createPost)
routes.put("/updatePost", updatePost)
routes.post("/loadImage",upload.single("file"), loadImage)

export default routes