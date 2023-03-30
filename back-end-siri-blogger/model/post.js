"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId
    },
    writter: {
        type: String
    },
    title: {
        type: String
    },
    view: {
        type: Number
    },
    love: {
        type: Number
    },
    category: {
        type: String
    },
    date: {
        type: String
    },
    content: {
        mainContent: {
            type: String
        },
        vote: [
            {
                titleVote: {
                    type: String
                },
                numberOfVote: {
                    type: Number
                },
                accountVote: [
                    {
                        _id: mongoose_1.default.Schema.Types.ObjectId,
                        ref: "Account"
                    }
                ]
            }
        ]
    }
});
