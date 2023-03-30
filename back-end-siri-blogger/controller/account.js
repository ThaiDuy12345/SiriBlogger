"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountByEmailAndPassword = exports.loadImage = exports.createAccount = exports.updateAccount = exports.deleteAccount = exports.getAccount = exports.getAllAccount = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const account_1 = __importDefault(require("../model/account"));
const getAllAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getAllAccount = getAllAccount;
const getAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield account_1.default.findOne({
            _id: req.params.Id
        }));
    }
    catch (err) {
        console.log(err);
    }
});
exports.getAccount = getAccount;
const deleteAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteAccount = deleteAccount;
const updateAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updateAccount = updateAccount;
const createAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const account = new account_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        password: req.body.password,
        phone: req.body.phone,
        rank: "none",
        avatar: req.body.avatar
    });
    try {
        res.json(yield account_1.default.create(account));
    }
    catch (err) {
        console.log(err);
    }
});
exports.createAccount = createAccount;
const loadImage = (req, res) => {
    var _a;
    res.json({ name: (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename });
};
exports.loadImage = loadImage;
const getAccountByEmailAndPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield account_1.default.findOne({
            email: req.body.email,
            password: req.body.password
        }));
    }
    catch (err) {
        console.log(err);
    }
});
exports.getAccountByEmailAndPassword = getAccountByEmailAndPassword;
