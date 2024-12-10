import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    clerId : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    photo : {
        type: String,
        required: true,
    },
    firstName : {
        type: String,
    },
    lastName : {
            type: String,
    },
    creditBalance: {
        type: Number,
        default: 10
    }
})

const User = mongoose.model('User', userSchema);

export default User;