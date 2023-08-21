
const asyncHandler = require('express-async-handler')


//get request /api/goals/  with private access
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

//post request /api/goals/  with private access

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({ message: 'Set goal' })
})

//put request /api/goals/:id  with private access

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` })
})

//delete request /api/goals/:id  with private access

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` })
})



module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}