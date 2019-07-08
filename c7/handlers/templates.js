var First=(req,res)=>{
    var data={
            ime:'Pero',
            prezime:'Perovski'
            studenti:[
                {ime:'Ivan',prezime:'Ivanovski'},
                {ime:'Jovan',prezime:'Jovanovski'}
            ]     
            };
    res.render('first',data);
}


module.exports={
    First
}