const workout = require('../models/workout')
const Workout = require('../models/workout')

function index(req, res, next) {
    Workout.find({ user: req.user._id })
        .then(workouts => {
            res.render('workouts/index', {
                workouts,
                title: 'My Workouts'
            })
        })
        .catch(next)
}

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'New Workout' })
}

function create(req, res, next) {
    req.body.user = req.user._id
    Workout.create(req.body)
        .then(() => res.redirect('/workouts'))
        .catch(next)
}

function show(req, res, next) {
    Workout.findById(req.params.id)
    .then(workout => {
        res.render('workouts/show', {
            workout,
            title: 'Workout Details'
        })
    })
    .catch(next)
}

function updateWorkoutForm(req, res, next) {
    Workout.findById(req.params.id)
        .then(workout => {
            res.render('workouts/edit', {
                workout,
                title: 'Workout Edit Detail'
            })
        })
}

function update(req, res, next) {
    Workout.findById(req.params.id)
        .then(workout => {
            if (!workout.user.equals(req.user._id)) throw new Error('Unauthorized')
            return workout.updateOne(req.body)
        })
        .then(() => res.redirect(`/workouts/${req.params.id}`))
        .catch(next)
}

function deleteWorkout(req, res, next) {
    Workout.findById(req.params.id)
        .then(workout => {
            if (!workout.user.equals(req.user._id)) throw new Error('Unauthorized')
            return workout.deleteOne(req.body)
        })
        .then(() => res.redirect('/workouts'))
        .catch(next)
}

module.exports = {
    index,
    newWorkout,
    create,
    show,
    updateWorkoutForm,
    update,
    deleteWorkout
}