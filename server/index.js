var Koa = require('koa')
var app = new Koa()
const bodyParser = require('koa-body')
const mongoose = require('mongoose')

const tasks = require('./routes/tasks')

app.use(bodyParser())
app.use(tasks.routes())

mongoose.connect(
  'mongodb+srv://chat:123@testclusterchat.oqqxt.azure.mongodb.net/test-db?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)

app.listen(5000, () => {
  console.log('Server running at port 5000')
})