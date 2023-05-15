const express = require('express')
const router = express.Router()

const workoutCtrl = require('../controllers/workouts')
const workout = require('../models/workout')

router.get('/', workoutCtrl.index)

router.get('/new', workoutCtrl.newWorkout)

router.post('/', workoutCtrl.create)

router.get('/:id', workoutCtrl.show)

router.get('/:id/edit', workoutCtrl.updateWorkoutForm)

router.put('/:id', workoutCtrl.update)

router.delete('/:id', workoutCtrl.deleteWorkout)

module.exports = router