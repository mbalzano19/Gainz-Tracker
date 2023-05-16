const Workout = require('../models/workout')

function create(req, res, next) {
    Workout.findById(req.params.workoutId)
        .then(workoutDoc => {
            workoutDoc.notes.push(req.body)
            return workoutDoc.save()
        })
        .then(workoutDoc => {
            res.redirect(`/workouts/${workoutDoc._id}`)
        })
        .catch(next)
}

function deleteNoteFromWorkout(req, res, next) {
    Workout.findById(req.params.workoutId)
    // console.log(req.params.workoutId)
        .then(workout => {
            // console.log(workout)
            if (!workout.user.equals(req.user._id)) throw new Error('Unauthorized')

            workout.notes.pull(req.params.noteId)
            return workout.save()
        })
        .then(() => res.redirect(`/workouts/${req.params.workoutId}`))
        .catch(next)
}

module.exports = {
    create,
    deleteNoteFromWorkout
}