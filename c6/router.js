
var routes={
    get:[],
    post:[],
    put:[],
    patch:[],
    delete:[]
};

var get = (route,fn)=>{
    routes.get.push({
        route:route,
        func:fn,
        regex:prepareRegex(route)
    });
    console.log(routes.get);
}
var post=(route,fn)=>{
    routes.post.push({
        route:route,
        func:func
    });
}
var put=(route,fn)=>{
    routes.put.push({
        route:route,
        func:func
    });
}
var patch=(route,fn)=>{
    routes.patch.push({
        route:route,
        func:func
    });
}
var del=(route,fn)=>{
    routes.del.push({
        route:route,
        func:func
    });
}

var prepareRegex = (str)=>{
    console.log(str.replace("//g",'\/'));
}

get('/students/:id',()=>{
    console.log("test");
});