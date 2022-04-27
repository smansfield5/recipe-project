var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes')
const isLoggedIn = require('../config/auth');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', recipesCtrl.index);

router.get('/new', recipesCtrl.new);

router.get('/:id', recipesCtrl.show);

router.post('/', isLoggedIn, recipesCtrl.create);

router.delete('/recipes/:id', recipesCtrl.delete);



module.exports = router;
