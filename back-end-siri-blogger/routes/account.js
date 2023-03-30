"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const account_1 = require("../controller/account");
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
routes.get("/", account_1.getAllAccount);
routes.get("/getAccount/:Id", account_1.getAccount);
routes.delete("/deleteAccount", account_1.deleteAccount);
routes.post("/createAccount", account_1.createAccount);
routes.put("/updateAccount", account_1.updateAccount);
routes.post("/getAccountByEmailAndPassword", account_1.getAccountByEmailAndPassword);
routes.post("/loadImage", upload.single("file"), account_1.loadImage);
exports.default = routes;
