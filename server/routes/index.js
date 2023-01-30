var express = require('express');
var router = express.Router();
var connection = require('../db/index');
/* GET home page. */

// 登录
router.post('/login', function (req, res, next) {
  var username = req.body.userinfo.username;//post专用
  var pwd = req.body.userinfo.pwd;
  let sql_user = `select * from userinfo where username = '${username}' and password = '${pwd}'`
  connection.query(sql_user, (err, result) => {
    //返回给前端 state，user_id， username
    if (result.length == 1) {
      res.json({ state: 1, user_id: result[0].user_id, username: result[0].username })
    } else {
      res.json({ state: 0 })
    }
  })
});
// 注册事件
function register(res,username, pwd){
  let sql = `insert into userinfo(username,password) values('${username}','${pwd}')`
  connection.query(sql, (err, result) => {
    res.json({state:1})
  })
}

// 注册
router.post('/register', (req, res, next) => {
  var username = req.body.userinfo.username;//post专用
  var pwd = req.body.userinfo.pwd;
  let find_user = `select * from userinfo where username = '${username}'`
  connection.query(find_user, (err, result) => {
    if(result.length == 1){
      res.json({ state: 0 })
    }else{
      register(res, username, pwd)
    }
  })

})



module.exports = router;
