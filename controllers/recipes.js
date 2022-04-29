const Recipe = require('../models/recipe');

module.exports = {
    index,
    show,
    create,
    new: newRecipe,
    edit,
    update
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

function edit(req, res) {
    Recipe.findOne({'recipe._id': req.params.id, 'recipe.user': req.params.id}).then(function(recipe) {
        if (!recipe) return res.redirect('/recipes');
     res.render('recipes/edit', { recipe })
    })
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

function update(req, res) {
    Recipe.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body, {new: true}, function(err, recipe) {
        if (err || !recipe) return res.redirect('/recipes');
            res.redirect(`/recipes/${recipe._id}`)
        
    });
}
