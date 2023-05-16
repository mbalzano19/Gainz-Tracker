const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        min: 0,
        required: true
    },
    reps: {
        type: Number,
        min: 0,
        required: true
    },
    weight: {
        type: Number,
        min: 0,
        required: true
    }
}, {
    timestamps: true
})


module.exports = exerciseSchema