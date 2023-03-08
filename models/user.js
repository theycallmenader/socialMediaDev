const mongoose = require('mongoose');
const schema = mongoose.Schema;


const userSchema = new schema({
    userPicture:{

    },
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    
})
module.exports =mongoose.model("User", userSchema);