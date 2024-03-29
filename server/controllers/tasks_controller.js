//DEPENDENCIES
const tasks = require('express').Router()
const db = require('../models')
const { Task } = db

// ALL TASKS
tasks.get('/', async (req, res) => {
    try {
        const foundTasks = await Task.findAll()
        res.status(200).json(foundTasks)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC TASK
tasks.get('/:id', async (req, res) => {
    try {
        const foundTask = await Task.findOne({
            where: { task_id: req.params.id }
        })
        res.status(200).json(foundTask)
    } catch (error) {
        res.status(500).json(error)
    }
})

//EXPORT
module.exports = tasks