var express = require('express');
var router = express.Router();
var connection = require('../db/index');

// 获取任务信息：
router.post('/getTask', function(req, res, next){
  // 查询当前登录id的所有任务
  let sql_getTask = `select * from task where user_id = ${req.body.user_id} order by task_id desc`
  connection.query(sql_getTask, (err, result) => {
      res.json({ result })
  })
})

// 删除任务
router.get('/delete', (req, res) => {
  let sql_delete = `delete from task where task_id = ${req.query.id}`
  connection.query(sql_delete, (err, result) => {
    res.json({ result })
  })
})

// 编辑任务
router.post('/edit', function(req, res, next) {
  console.log(req.body)
  let sql_edit = `update task set task_message = '${req.body.task_message}' where task_id = ${req.body.task_id}`
  connection.query(sql_edit, (err, result) => {
    res.json({ state:1 })
  })
})

//完成任务
router.post('/edit', function(req, res, next) {
  console.log(req.body)
  let sql_edit = `update task set task_message = '${req.body.task_message}' where task_id = ${req.body.task_id}`
  connection.query(sql_edit, (err, result) => {
    res.json({ state:1 })
  })
})

// 添加任务
router.post('/addTask', function(req, res, next) {
  console.log(req.body)
  const user_id = req.body.user_id;
  const task_message = req.body.task_message;
  const date = req.body.date;
  let sql_add = `insert into task(user_id, task_message, date, state) values(${user_id},'${task_message}','${date}',0)`
  connection.query(sql_add, (err, result) => {
    res.json({ state:1 })
  })
})

router.get('/', function(req, res, next){
    res.send('this is page');
})
  


module.exports = router;