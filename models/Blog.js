const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    content: {
        type: String,
    },
    sharedBy: {
        type: String
    },
    userId: {
        type: String
    }
})

const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog