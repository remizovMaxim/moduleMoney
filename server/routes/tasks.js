const Router = require('koa-router')
const router = new Router()
const Task = require('../models/Task')
const str_rand = require('../generator/generatorApi')

router.get('/api/tasks', async ctx => {
  await Task.find()
    .then(tasks => {
      const kek = {
        obj1: tasks,
      }
      ctx.body = kek
    })
    .catch(err => {
      ctx.body = 'error: ' + err
    })
})

router.post('/api/task', async ctx => {
  var task = new Task()
  task.task_name = str_rand()
  await task
    .save()
    .then(async data => {
      ctx.body = data
    })
    .catch(err => {
      ctx.body = 'error: ' + err
    })  
})

router.delete('/api/task/:id', async ctx => {
  await Task.deleteOne({
    _id: ctx.params.id
  })
    .then(() => {
      ctx.body = { status: 'Task Deleted!' }
    })
    .catch(err => {
      ctx.body = 'error: ' + err
    })
})

router.put('/api/task/', async ctx => {
  if (!ctx.request.body.task_name) {    
    const kek = {
      obj1: [{ error: 'Bad Data' }],
    }
    ctx.body = kek
  } else {

    await Task.find(
      { task_name: ctx.request.body.task_name }
    )
      .then((data) => {        
        ctx.body = data;
      })
      .catch(err => {        
        ctx.body = 'error: ' + err
      })    
  }
})

module.exports = router