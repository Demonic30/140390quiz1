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

app.get('/student', function (req, res) {
connection.connect()

connection.query('select * from students', function (err, rows, fields) {
        console.log('DATA' + rows);
        res.render('pages/students', { students: rows })
    
    console.log(rows);
    
})

connection.end()
});

app.get('/student', function (req, res) {
    connection.connect()
    
    connection.query('select * from subjects', function (err, rows, fields) {
            console.log('DATA' + rows);
            res.render('pages/subjects', { subjects: rows })
        
        console.log(rows);
        
    })
    
    connection.end()
    });
    
console.log('App is running at http://localhost:8080');
app.listen(8080);