var http=require('http');
var server=http.createServer(function(req,res){
    res.write(`Method: ${req.method}, URL:${req.url}` );
    res.end();

});
server.listen(8293,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Success!");
});
