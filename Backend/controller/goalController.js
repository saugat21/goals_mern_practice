
//get request /api/goals/  with private access
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

//post request /api/goals/  with private access

const setGoal = (req, res) => {
    res.status(200).json({ message: 'Set goal' })
}

//put request /api/goals/:id  with private access

const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` })
}

//delete request /api/goals/:id  with private access

const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` })
}



module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}