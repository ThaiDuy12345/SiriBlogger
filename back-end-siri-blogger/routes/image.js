"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1 = require("../controller/image");
const routes = express_1.default.Router();
routes.get("/getImage/:Id", image_1.getImage);
exports.default = routes;
