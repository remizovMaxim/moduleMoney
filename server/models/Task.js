const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TaskSchema = new Schema({
  task_name: {
    type: String
  },
  task2_name2: {
    type: String
  }
})

module.exports = User = mongoose.model('tasks2kekpek', TaskSchema)