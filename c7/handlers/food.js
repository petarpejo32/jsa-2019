var fs = require('fs');


var GetAllFood = (req, res) => {
    modelFood.GetAll()
    .then(data => {
        return res.send(data);
    })
    .catch(err =>{
        return res.send('Error');
    })
};
var GetSingleFood = (req,res)=>{
    modelFood.GetSingle(req.params.id)
    .then(data =>{
        return res.send(data);
    })
    .catch(err =>{
        return res.send("Error");
    })

    fs.readFile('./food_list.json','utf8',(err,data)=>{
        if(err){
            res.send('Could not read file');
            return;
        }
        var jData = JSON.parse(data);
        var rez = jData.filter((a) => {
            return a.id == req.params.id;
        });

        if(rez.length == 0){
            return res.status(404).send("Not found");
        }
        return res.send(rez[0]);
    });
}
var CreateNewFood = (req,res)=>{

    var check = req.body.id != undefined
    && req.body.name !=undefined && req.body.name !="" && req.body.name.length > 0
    && req.body.price !=undefined
    && req.body.calories !=undefined;

    if(!check){
        return res.status(400).send("Bad request!");
    }
    fs.readFile('./food_list.json','utf8',(err,data)=>{
        if(err){
            res.send('Could not read file');
            return;
        }
        var jData=JSON.parse(data);
        jData.push(req.body);
        fs.writeFile('/food_list.json', JSON.stringify(jData), (err)=>{
            if(err){
                return res.status(500).send("Could not read File");
            }
            return res.status(201).send(req.body);
        });
    });
}
var UpdateFood = (req,res)=>{
    var check = req.body.id != undefined
    && req.body.name !=undefined && req.body.name !="" && req.body.name.length > 0
    && req.body.price !=undefined
    && req.body.calories !=undefined;

    if(!check){
        return res.status(400).send("Bad request!");
    }
    fs.readFile('./food_list.json','utf8',(err,data)=>{
        if(err){
            res.send('Could not read file');
            return;
        }
        var jData=JSON.parse(data);
        for(let i=0;i<jData.length;i++){
            if(jData[i].id==req.params.id){
                jData[i]==req.body;
                break;
            }
        }
        fs.writeFile('/food_list.json', JSON.stringify(jData), (err)=>{
            if(err){
                return res.status(500).send("Could not read File");
            }
            return res.status(200).send('Ok');
        });
    });
}
var PartialUpdateFood = (req,res)=>{
    var check = (req.body.name !=undefined && req.body.name !="" && req.body.name.length > 0)
    || req.body.price !=undefined
    || req.body.calories !=undefined;

    if(!check && req.body.id != undefined){
        return res.status(400).send("Bad request!");
    }
    fs.readFile('./food_list.json','utf8',(err,data)=>{
        if(err){
            res.send('Could not read file');
            return;
        }
        var jData=JSON.parse(data);
        var index=null;
        for(let i=0;i<jData.length;i++){
            if(jData[i].id==req.params.id){
                index=i;
                break;
            }
        }
        // if(req.body.name!=undefined && req.body.name !=""){
        //     jData[index].name=req.body.name;
        // }
        // if(req.body.price!=undefined && req.body.price !=""){
        //     jData[index].price=req.body.price;
        // }
        // if(req.body.calories!=undefined && req.body.calories !=""){
        //     jData[index].calories=req.body.calories;
        // }

        for(var i in jData[index]){
            if(req.body[i] != undefined && req.body[i] != ""){
                jData[index][i] = req.body[i];
            }
        }
        fs.writeFile('/food_list.json', JSON.stringify(jData), (err)=>{
            if(err){
                return res.status(500).send("Could not read File");
            }
            return res.status(200).send('Ok');
        });
    });
}
var DeleteFood = (req,res)=>{
    fs.readFile('./food_list.json','utf8',(err,data)=>{
        if(err){calories
            res.send('Could not read file');
            return;
        }
        jData=JSON.parse(data);
        var index=null;
        for(let i=0;i<jData.length;i++){
            if(jData[i].id==req.params.id){
                index=i;
                break;
            }
        }
        jData.splice(index, 1);
        fs.writeFile('/food_list.json', JSON.stringify(jData), (err)=>{
            if(err){
                return res.status(500).send("Could not read File");
            }
            return res.status(200).send('Ok');
        });
    });
}

module.exports = {
    GetAllFood,
    GetSingleFood,
    CreateNewFood,
    UpdateFood,
    PartialUpdateFood,
    DeleteFood,
    GetAll,
    GetSingle
};