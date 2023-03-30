import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    writter:{
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
    date:{
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
                        _id: mongoose.Schema.Types.ObjectId,
                        ref: "Account"
                    }
                ]
            }
        ]
    }

})