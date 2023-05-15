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
    Workout.findById(req.params.workoutId)
    // console.log(req.params.workoutId)
        .then(workout => {
            console.log(workout)
            if (!workout.user.equals(req.user._id)) throw new Error('Unauthorized')

            workout.exercises.pull(req.params.exerciseId)
            return workout.save()
        })
        .then(() => res.redirect(`/workouts/${req.params.workoutId}`))
        .catch(next)
}

module.exports = {
    addExerciseToWorkout,
    deleteExerciseFromWorkout
}