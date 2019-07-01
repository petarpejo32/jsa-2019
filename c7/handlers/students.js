var GetAllStudents = (req,res) => {
    res.send("hello from /students");
};

var GetSudentById= (req,res) => {
    res.send("Get single student with id: "+ req.params.id);
};

var GetStudentSubjectGrades = (req,res) => {
    res.send("Get single student with id: "+ req.params.id+" grades from the subject "+ req.params.sub);
};

module.exports={
    GetAllStudents,
    GetSudentById,
    GetStudentSubjectGrades
};