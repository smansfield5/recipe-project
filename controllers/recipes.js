const Recipe = require('../models/recipe');

module.exports = {
    index,
    create,
    new: newRecipe,
    //show
}

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', { recipes })
    });
}

// function show(req, res) {
//     Recipe.findById(req.params.id, function(err, recipe) {
//         Recipe.find({recipe: recipe.id}, function(err, recipe) {
//             res.render('recipes/show') 
//         });
//     }); 
// }

function create(req, res) {
    Recipe.create(req.body);
    res.redirect('/recipes');
}

function newRecipe(req, res) {
    res.render('recipes/new')
}