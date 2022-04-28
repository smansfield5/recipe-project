const Recipe = require('../models/recipe');

module.exports = {
    index,
    show,
    create,
    new: newRecipe,
    delete: deleteRec,
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

function deleteRec(req, res, next) {
    Recipe.findById({'recipe.id': req.body.id, 'recipe.user': req.user.id}).then(function(recipe) {
        if (!recipe) return res.redirect('/recipes');
        recipe.remove(req.body.id);
        recipe.save().then(function() {
            res.redirect('/recipes');
        }).catch(function(err) {
            return next(err)
        })
    })
}


function update(req, res) {
    console.log(req.body)
    Recipe.findOneAndUpdate({'recipe._id': req.params.id, 'recipe.user': req.user._id}, req.body, {new: true}, function(err, recipe) {
        if (err || !recipe) return res.redirect('/recipes');
            console.log(err)
            res.redirect(`/recipes/${recipe._id}`)
        
    });
}
