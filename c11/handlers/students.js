var model = require('../models/students');

var GetStudents = () => {
    model.GetAll()
    .then(data =>{
        return res.render('students',{students: data})
    })
    .catch(err =>{
        return res.send('Error');
    })
}

module.exports={
    GetStudents
}