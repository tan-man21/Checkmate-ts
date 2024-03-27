//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIG/MIDDLEWARE
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())

//ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'CheckMate'
    })
})

//CONTROLLERS
const tasksController = require('/controllers/tasks_controller.js')
app.use('/tasks', tasksController)

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})