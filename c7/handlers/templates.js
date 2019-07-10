
var fs = require('fs');

var GetStudents = (req, res) => {
    fs.readFile("./students_list.json", "utf8", (err, data) => {
        if(err){
            throw err;
        }
        else {
            var jData = JSON.parse(data);
            var newData = {};
            newData.studenti = jData;
            
            res.render("students", newData);
        };
    });
}
    module.exports = {
        GetStudents
    };