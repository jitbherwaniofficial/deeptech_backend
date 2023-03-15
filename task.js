const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    data:String
})

const Task = mongoose.model('task', TaskSchema)

module.exports = Task;