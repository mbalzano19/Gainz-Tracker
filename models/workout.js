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
    date: {
        type: Date
    },
    exercises: [exerciseSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)