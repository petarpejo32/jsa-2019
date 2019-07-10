var modelFood = require('../models/food');

var Food = (req, res) => {
    modelFood.GetAll()
    .then(data => {
        return res.render('food', {f: data});
    })
    .catch(err =>{
        return res.send('Error');
    })
   
}

module.exports = {
    Food
}