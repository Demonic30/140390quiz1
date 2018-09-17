var express = require('express');
var app = express();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'my_db'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()


//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/about', function (req, res) {
    var name = 'Coffaree Hahza';
    var hobbies = ['Music', 'Movie', 'Programming'];
    var bdate = '19/05/1997';
    res.render('pages/about', { fullname: name, hobbies: hobbies, bdate: bdate });
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
console.log('App is running at http://localhost:8080');
app.listen(8080);