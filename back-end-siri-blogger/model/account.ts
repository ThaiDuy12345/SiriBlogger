import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    }]
},{
    collection: 'Account'
})

const Account = mongoose.model('Account', accountSchema)

export default Account

