const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    }
}, {
    timestamps: true
})


module.exports = exerciseSchema