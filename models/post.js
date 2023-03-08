const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postSchema = new schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postLikes: {
        type: Number,
        default: 0,
        required: true
    },
    postDislikes: {
        type: Number,
        default: 0,
        required: true
    },
    postShare: {
        type: Number,
        default: 0,
        required: true
    },
    postComments: {
        type: Number,
        default: 0,
        required: true
    },
    postDate:{
        type: Date,
        default: Date.now,
        required: true
    },
    postCategory: {
        type: String,
        required: true
    },
    postContent: { },
})
module.exports = mongoose.model('Post', postSchema);