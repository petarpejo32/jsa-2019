// lorem ipsum tekst da go procita cel kolku kolku karakteri, zborovi ima kolku recenici.
//sledno kolku zborovi imaat pomalku od 7karakteri,kolku imaat ednakvo i kolku imaat povekje od 7.
var fs=require('fs');
var li=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit metus. Donec eget turpis ipsum. Cras lorem nibh, malesuada nec lorem id, ornare tempus est. Proin dui libero, varius ut tempor ac, dapibus ut felis. In molestie convallis ornare. Donec sagittis tortor porta, suscipit erat sit amet, hendrerit justo. Suspendisse dignissim libero enim, eu tincidunt turpis pulvinar non. Aliquam ut felis eu sapien venenatis elementum. Cras lobortis mi et enim maximus, in sollicitudin ex porttitor. Maecenas tincidunt id nunc ac fermentum. Sed libero lacus, egestas in vestibulum non, commodo et nisl. Integer euismod quam in metus auctor tincidunt.`;
fs.writeFile("tekst.txt",li,(err)=>{
    if(err){
        console.log(err);
    }
});
fs.readFile("tekst.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
    }
    sedum(data);
    karakteri(data);
    zborovi(data);
    recenici(data);
});

var karakteri=(data)=>{
    var karakteri=k.replace(/\a+/b,' ').length;
    console.log("Ima "+karakteri+ " karakteri");
}// od google e neznam kako raboti.replace

var zborovi=(s)=>{
    var vz=z.split(' ');
    console.log((vz.length))
}

var recenici=(s)=>{
    var recenici=li.split(" ");
    var brojac=0;
    recenici.forEach(zbor=>{
        if(zbor[zbor.length-1] === '.' || zbor[zbor.length-1]==='!' || zbor[zbor.length-1]==='?'){
            brojac+=1;
        }
    });
    console.log("Ima "+brojac+" recenici" );
}

var sedum=(s)=>{
    var pomal=0;
    var ednakov=0;
    var pogolem=0;

    s=s.split(".").join();
    var zb=s.replace(/,/b," ").split(" ");
    //ne znam kako raboti

    for(var i=0;i<zb.length;i++){
        if(zb[i].length<7){
            pomal++;
        }
        else if(zb[i].length==7){
            ednakov++;
        }
        else if(zb[i].length>7){
            pogolem++;
        }
    }

    console.log(pomal+" se pomali od 7. "+ednakov+" se ednakvi na 7. "+pogolem+" se pogolemi od 7");
}