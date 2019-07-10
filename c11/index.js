var express = require('express');
var students = require('./handlers/students');
var hbs = require('express-hbs');

var app = express();
app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', )

app.get('/', students.GetStudents);

app.listen(8080, (err) => {
    if(err){
        console.error('Could not start server');
    }
    return console.log('Server started successfully');
})