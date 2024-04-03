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

module.exports = subtasks