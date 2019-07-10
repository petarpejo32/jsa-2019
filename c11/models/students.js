var fs = require('fs');

const studentsFile = ('./students.json')

var GetAll = () =>{
    return new Promise((success, fail)=>{
        fs.readFile(studentsFile, 'utf8', (err,data) =>{
            if(err){
                return fail(err);
            }
            return success(JSON.parse(data));
        })
    });
}

module.exports = {
    GetAll
}