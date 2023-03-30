"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const accountSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId
    },
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    dateOfBirth: {
        type: String
    },
    gender: {
        type: Number
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    avatar: {
        type: String
    },
    rank: {
        type: String
    },
    post: [{
            _id: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'Post'
            }
        }]
}, {
    collection: 'Account'
});
const Account = mongoose_1.default.model('Account', accountSchema);
exports.default = Account;
