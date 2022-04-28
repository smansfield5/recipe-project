var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes')
const isLoggedIn = require('../config/auth');


router.get('/', recipesCtrl.index);

router.get('/new', recipesCtrl.new);

router.get('/:id', recipesCtrl.show);

router.post('/', isLoggedIn, recipesCtrl.create);

router.delete('/:id', isLoggedIn, recipesCtrl.delete);

router.get('/:id/edit', isLoggedIn, recipesCtrl.edit)

router.put('/:id', isLoggedIn, recipesCtrl.update)

module.exports = router;
