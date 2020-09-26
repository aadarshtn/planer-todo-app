const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }

});

const Tasks = mongoose.model('tasks', taskSchema);

module.exports = Tasks;