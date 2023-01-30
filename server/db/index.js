const mysql = require('mysql');
let db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456789h',
    database:'simpletp', //数据库名称
    multipleStatements:true
})
module.exports = db