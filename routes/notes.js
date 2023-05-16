const express = require('express')
const router = express.Router()
const noteCtrl = require('../controllers/notes')

router.post('/:workoutId', noteCtrl.create)
router.delete('/:workoutId/:noteId', noteCtrl.deleteNoteFromWorkout)

module.exports = router