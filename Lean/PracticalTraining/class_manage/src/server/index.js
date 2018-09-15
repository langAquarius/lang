var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: '1601n',
    inheritAttrs: true
});

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

const router = express.Router();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});


//注册\登录接口
app.post('/login', jsonParser, (req, res) => {
    req.body = req.body.parms;
    //获取该用户明的数量
    connection.query(`select count(*) as num from user where username = ?`, [req.body.user], (err, rows, fields) => {
        console.log(rows[0].num)
        if (err) throw err;
        if (rows[0].num) {
            connection.query(`select count(*) as num from user where username = ? and password = ?`, [req.body.user, req.body.password], (err, rows, fields) => {
                // console.log(rows);  
                if (rows[0].num == 1) {
                    res.json({
                        code: 0,
                        id: rows[0].id,
                        msg: '登陆成功'
                    })
                } else {
                    res.json({
                        code: -2,
                        msg: '登陆失败'
                    })
                }
            })
        } else {
            connection.query('insert into user (username,password) values(?,?)', [req.body.user, req.body.password], (err, rows, fields) => {
                console.log('rows...', rows);
                connection.query('select count(*) as num,id from user where username = ? and password = ?', [req.body.user, req.body.password], (err, rows, fields) => {
                    if (rows.id) {
                        res.json({
                            code: 0,
                            msg: '注册成功'
                        })
                    } else {
                        res.json({
                            code: -1,
                            msg: '注册失败'
                        })
                    }
                })
            })
        }
    })
})

//登录接口
// app.post('/login', urlencodedParser, (req, res) => {
//     console.log(req.body);
//     //获取用户名的数量
//     connection.query(`select count(*) from where user username = ${req.body.user}`, function(err, rows, fields) {
//         if (err) throw err;
//         console.log('用户数量：', rows);
//     })
// })



//拉取用户列表
app.get('/userList', (req, res) => {
    connection.query('select *,id,username,birthday,address,phone,date from user', (err, rows, fields) => {
        if (err) throw err;
        console.log(rows);
        res.json({
            code: 0,
            data: rows
        });
    })
})

// 获取权限列表
app.get('/accessList', (req, res) => {
    let uid = req.query.uid;
    connection.query(`select access.aname from user,user_roler,roler_access,access where user.id=user_roler.uid 
    and user_roler.rid = roler_access.rid and roler_access.aid = access.id and uid=? and user_roler.status=1 group by access.id`, [uid], function(err, rows, fields) {
        if (err) throw err;
        console.log(rows.length, rows);
        res.json({
            code: 0,
            list: rows
        })
    });
})


// 拉取角色列表
app.get('/rolerList', (req, res) => {
    let id = req.query.id,
        allRoler = [];
    console.log(req.query);
    connection.query('select id,rname from roler', (err, rows, fields) => {
        if (err) throw err;
        console.log(rows);
        allRoler = rows;
        if (id) {
            connection.query(`select rid,rname from user_roler, roler where user_roler.rid = roler.id and user_roler.status=1 and user_roler.uid=${id}`, (err, rows, fields) => {
                if (err) throw err;
                console.log(rows);
                res.json({
                    code: 0,
                    allRoler,
                    myRoler: rows
                });
            })
        } else {
            res.json({
                code: 0,
                allRoler,
                myRoler: []
            })
        }
    })
})

// 添加角色接口
app.get('/addRoler', (req, res) => {
    let uid = req.query.uid,
        rid = req.query.rid;
    // 先查询用户是否有该角色，如果有则不添加
    connection.query(`select rid from user_roler where uid=? and rid=? and status =1`, [uid, rid], function(err, rows, fields) {
        if (err) throw err;
        console.log('rows...', rows);
        if (rows.length) {
            res.json({
                code: -2,
                msg: '已有该角色'
            })
        } else {
            connection.query(`insert into user_roler (uid, rid) values(?, ?)`, [uid, rid], function(err, rows, fields) {
                if (err) throw err;
                console.log(rows);
                if (rows.insertId) {
                    res.json({
                        code: 0,
                        msg: '添加角色成功'
                    })
                } else {
                    res.json({
                        code: -1,
                        msg: '添加角色失败'
                    })
                }
            });
        }
    });
})

// 删除角色接口
app.get('/removeRoler', (req, res) => {
    let uid = req.query.uid,
        rid = req.query.rid;
    connection.query(`update user_roler set status=0  where uid=? and rid=?`, [uid, rid], function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        if (rows.affectedRows) {
            res.json({
                code: 0,
                msg: '删除角色成功'
            })
        } else {
            res.json({
                code: -1,
                msg: '删除角色失败'
            })
        }
    });
})


app.get('/list', (req, res) => {
    connection.connect();

    //查询语句
    connection.query('select *,id,username,password from user', (err, rows, fields) => {
        if (err) throw err;
        console.log(rows);
    });
    //插入语句
    // connection.query('insert into user (username,password,phone,birthday) values("langying",123123,13241637411,19960130)', (err, rows, fields) => {
    //     console.log(rows)
    // });
    //修改语句
    connection.query('update user username="王二" where username="王二小"', (err, rows, fileds) => {

        console.log(rows)
    });
    //删除语句
    // connection.query('delete from user where id<3', (err, rows, fields) => {
    //     console.log(rows)
    // })
    res.end('123')
})

app.listen(9000);