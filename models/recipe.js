const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User', require: true},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const recipeSchema = new Schema({
    recImg: {
        
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: Number,
        min: 1,
        max: 5
    },
    servings: {
        type: Number,
        required: true
    },
    ingredientList: {
        type: String,
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});




module.exports = mongoose.model('Recipe', recipeSchema);