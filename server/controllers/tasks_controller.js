//DEPENDENCIES
const tasks = require('express').Router()
const db = require('../models')
const { Task, SubTask } = db

// ALL TASKS
tasks.get('/', async (req, res) => {
    try {
        const foundTasks = await Task.findAll()
        res.status(200).json(foundTasks)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//FIND A SPECIFIC TASK
tasks.get('/:id', async (req, res) => {
    try {
        const foundTask = await Task.findOne({
            where: { task_id: req.params.id },
            include: [
                {
                    model: SubTask, as: 'subtasks'
                }
            ]
        })
        res.status(200).json(foundTask)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//CREATE A TASK
tasks.post('/', async (req, res) => {
    try {
        // const {task_name, list_id} = req.body
        const newTask = await Task.create(req.body)
        res.status(200).json(newTask)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//UPDATE TASK
tasks.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.update(
            req.body,
            { where: { task_id: req.params.id } }
        )
        res.status(200).json('Updated Task!')
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//DELETE TASK
tasks.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.destroy(
            { where: { task_id: req.params.id } }
        )
        res.status(200).json('Deleted Task!')
    } catch (error) {
        res.status(500).json(error.message)
    }
})
//EXPORT
module.exports = tasks