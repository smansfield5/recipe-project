const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: Number,
        min: 1,
        max: 5
    },
    ingredientList: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports =mongoose.model('Recipe', recipeSchema);