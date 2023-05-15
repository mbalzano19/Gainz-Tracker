const express = require('express')
const router = express.Router()

const exerciseCtrl = require('../controllers/exercises')

router.post('/:workoutId', exerciseCtrl.addExerciseToWorkout)

router.delete('/:workoutId/:exerciseId', exerciseCtrl.deleteExerciseFromWorkout)

module.exports = router