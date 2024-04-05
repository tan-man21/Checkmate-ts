// DEPENDENCIES
const subtasks = require('express').Router()
const db = require('../models')
const { SubTask } = db
const { Op } = require('sequelize')

//FIND ALL SUBTASKS
subtasks.get('/', async (req, res) => {
    try {
        const foundSubtasks = await SubTask.findAll()
        res.status(200).json(foundSubtasks)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//FIND ONE SUBTASK
subtasks.get('/:id', async (req, res) => {
    try {
        const foundSubtask = await SubTask.findOne({
            where: { sub_task_id: req.params.id }
        })
        res.status(200).json(foundSubtask)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//CREATE SUBTASK
subtasks.post('/', async (req, res) => {
    try {
        const {sub_task_name, task_id, list_id} = req.body
        const newSubtask = await SubTask.create({sub_task_name, task_id, list_id})
        res.status(200).json(newSubtask)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//UPDATE SUBTASK
subtasks.put('/:id', async (req, res) => {
    try {
        const updatedSubtask = await SubTask.update(
            req.body,
            { where: { sub_task_id: req.params.id } }
        )
        res.status(200).json('Updated Subtask!')
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//DELETE SUBTASK
subtasks.delete('/:id', async (req, res) => {
    try {
        const deletedSubtask = await SubTask.destroy({
            where: { sub_task_id: req.params.id }
        })
        res.status(200).json('Deleted Subtask!')
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = subtasks