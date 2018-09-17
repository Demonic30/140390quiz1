var express = require('express');
var app = express();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});

//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index');
});

// Display all product
app.get('/product', function (req, res) {
    var id = req.param('id');
    var sql = 'select * from products';
    if (id) {
        sql += ' where id =' + id;
    }
        db.any(sql)
            .then(function (data) {
                console.log('DATA' + data);
                res.render('pages/products', { products: data })

            })
            .catch(function (error) {
                console.log('ERROR:' + error);
            })
    
});
app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    var sql = 'select * from users';
    if (id){
        sql += ' where id =' + id;
    }
    db.any(sql)
        .then(function (data) {
            console.log('DATA' + data);
            res.render('pages/users', { users: data })

        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })
});

app.get('/user', function (req, res) {
    db.any('select * from users', )
        .then(function (data) {
            console.log('DATA' + data);
            res.render('pages/users', { users: data })

        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })
});

app.get('/student', function (req, res) {
connection.connect()

connection.query('select * from students', function (err, rows, fields) {
        console.log('DATA' + rows);
        res.render('pages/students', { students: rows })
    
    console.log(rows);
    
})

connection.end()
});
console.log('App is running at http://localhost:8080');
app.listen(8080);