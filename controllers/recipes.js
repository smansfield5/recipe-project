const Recipe = require('../models/recipe');

module.exports = {
    index,
    show,
    create,
    new: newRecipe,
    delete: deleteRec
    
}

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', { recipes })
    });
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', { recipe })
    });
}


function create(req, res) {
    req.body.user = req.user._id;
    Recipe.create(req.body, function(err, recipe) {
    res.redirect('/recipes');
    });
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'add recipe' })
}

function deleteRec(req, res, next) {
    Recipe.findOne({'recipe._id': req.params.id, 'recipe.user': req.params.id}).then(function(recipe) {
        if (!recipe) return res.redirect('/recipes');
        recipe.remove(req.params.id);
        recipe.save().then(function() {
            res.redirect('/recipes');
        }).catch(function(err) {
            return next(err)
        })
    })
}
