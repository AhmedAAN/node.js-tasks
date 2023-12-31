const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

const Task = mongoose.model('task', taskSchema);
module.exports = Task;