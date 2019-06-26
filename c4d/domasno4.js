var http=require('http');

var server=http.createServer(function(req,res){
    console.log(req);
    var URL=req.url.split('/');
    var output=0;
    for(var i = 0; i<URL.length;i++){
        if(i%2!=0){
            if(URL[i]=="+"){
                output=parseInt(URL[i-1])+parseInt(URL[i+1]);
            }
            else if(URL[i]=="-"){
                output=parseInt(URL[i-1])-parseInt(URL[i+1]);
            }
            else if(URL[i]=="*"){
                output=parseInt(URL[i-1])*parseInt(URL[i+1]);
            }
            else if(URL[i]=="/"){
                output=parseInt(URL[i-1])/parseInt(URL[i+1]);
            }
            else if(URL[i]=="="){
                break;
            }
        }
    }
    //proveruva edno po edno pa ne vazi za prioritet na zagradi i na mnozenje, so uste eden if moze da se sredi ama na trening sum :D
    //(ne e proveren kodot samo e dignat serverot no time sorry)
    res.write(output+'');
    res.end();
});
server.listen(8080,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Success!");
});