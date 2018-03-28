const mongoose   = require('mongoose')
const Schema     = mongoose.Schema

const postSchema = new Schema({
    caption   : String,
    image   : String,
    user_id: {
        type:Schema.Types.ObjectId, 
        ref: 'User'
    },
    upvote : [{
        type:Schema.Types.ObjectId, 
        ref: 'User'
    }],
    downvote : [{
        type:Schema.Types.ObjectId, 
        ref: 'User'
    }],
    createdAt : {
        type : Date,
        default : Date.now
    }
})

let Post         = mongoose.model('Post', postSchema)

module.exports   = Post;