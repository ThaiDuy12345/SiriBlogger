"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadImage = exports.createPost = exports.updatePost = exports.deletePost = exports.getPost = exports.getAllPost = void 0;
const getAllPost = (req, res) => {
};
exports.getAllPost = getAllPost;
const getPost = (req, res) => {
};
exports.getPost = getPost;
const deletePost = (req, res) => {
};
exports.deletePost = deletePost;
const updatePost = (req, res) => {
};
exports.updatePost = updatePost;
const createPost = (req, res) => {
};
exports.createPost = createPost;
const loadImage = (req, res) => {
    var _a;
    res.json({ name: (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename });
};
exports.loadImage = loadImage;
