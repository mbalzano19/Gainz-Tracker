const mongoose = require('mongoose')
const exerciseSchema = require('./exercise')

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    exercises: [exerciseSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)