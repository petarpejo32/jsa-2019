var express = require('express');
var students = require('./handlers/students');
var calculator=require('./handlers/calculator');

var api = express();

api.get('/students', students.GetAllStudents);
api.get('/students/:id', students.GetSudentById);
api.get('/students/:id/grades/:sub', students.GetStudentSubjectGrades);

api.get('/calc/:op/:a/:b', calculator.Calculator);
api.listen(8080, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("success!");
});