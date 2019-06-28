var http=require('http');

var getAllStudents=()=>{console.log("getallstudents")};
var getStudent=()=>{console.log("getstudent")};
var storeStudent=()=>{console.log("storestudent")};
var deleteStudent=()=>{console.log("deletestudent")};
var updateStudent=()=>{console.log("updatedstudent")};
var patchStudent=()=>{console.log("patchstudent")};
var routes = {
    get:[
        {route:'/students',func: getAllStudents},
        {route:'/students/:id',func: getStudent},
        {route:'/students/:name',func: getStudent}
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




var regmatch=  true;
var index=undefined;
var server=http.createServer((req,res)=>{
    var regmatch=  true;
    for(let i=0;i < routes[req.method.toLowerCase()].length;i++){
        console.log(routes[req.method.toLowerCase()][i].route)
        regmatch=true;
        if(route==req.url){
            index=i;
            regmatch=false;
            break;
        }
    }
    if(regmatch){
        for(let i=0;i < routes[req.method.toLowerCase()].length;i++){
            var route=routes[req.method.toLowerCase()][i].route;
            route=route.split('/').join('\/');
            var regroute=route.replace(/(:[a-zA-z.]*),'([a-zA-z0-9\-]*)'/)
            var re=new RegExp('$'+regroute+'$');
            if(re.test(req.url)){
                index=i;
                break;
            }
        }
    }
    if(index !==undefined ){
        routes[req.method.toLowerCase()][index].func();
    }
    res.end();
});
server.listen(8293,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Success!");
});