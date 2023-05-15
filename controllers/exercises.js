const Workout = require('../models/workout')
const Exercise = require('../models/exercise')


function addExerciseToWorkout(req, res, next) {
    Workout.findById(req.params.workoutId)
        .then(workout => {
            workout.exercises.push(req.body)
            console.log(req.body)
            console.log(Workout)
            // console.log(Exercise)
            return workout.save()
        })
        .then(() => res.redirect(`/workouts/${req.params.workoutId}`))
        .catch(next)
}

function deleteExerciseFromWorkout(req, res, next) {
    Workout.findById(req.params.id)
        .then(workout => {
            if (!workout.user.equals(req.user._id)) throw new Error('Unauthorized')

            workout.exercises.id(req.params.exerciseId).deleteOne()
            return workout.save()
        })
        .then(() => res.redirect(`/workouts/${req.params.workoutId}`))
        .catch(next)
}

module.exports = {
    addExerciseToWorkout,
    deleteExerciseFromWorkout
}