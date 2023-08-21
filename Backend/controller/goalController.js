
const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel')


//get request /api/goals/  with private access
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

//post request /api/goals/  with private access

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

//put request /api/goals/:id  with private access

const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

//delete request /api/goals/:id  with private access

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findByIdAndDelete(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    res.status(200).json({ id: req.params.id })
})



module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}