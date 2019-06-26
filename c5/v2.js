var routes = {
    get:[
        {route:'/students',func: getAllStudents},
        {route:'/students/:id',func: getStudent}
    ],
    post:[
        {route:'/students',func:storeStudent}
    ],
    put:[
        {route:'/students/:id',func:updateStudent}
    ],
    patch:[
        {route:'/students',func:patchStudent}
    ],
    delete:[
        {route:'/students',func:deleteStudent}
    ],
};

var getAllStudents=()=>{};
var getStudent=()=>{};
var storestudent=()=>{};
var deleteStudent=()=>{};
var updateStudent=()=>{};
var patchStudent=()=>{};