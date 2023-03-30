"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const post_1 = require("../controller/post");
const routes = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + " - " + file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
routes.get("/", post_1.getAllPost);
routes.get("/getPost/:Id", post_1.getPost);
routes.delete("/deletePost", post_1.deletePost);
routes.post("/createPost", post_1.createPost);
routes.put("/updatePost", post_1.updatePost);
routes.post("/loadImage", upload.single("file"), post_1.loadImage);
exports.default = routes;
