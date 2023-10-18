const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const noteSchema = new Schema({
    name: {
        type: String
    },
    content: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Note = mongoose.model("note", noteSchema);
module.exports = Note;