const mongoose = require('mongoose')
const exerciseSchema = require('./exercise')

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


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
    exercises: [exerciseSchema],
    notes: [noteSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)