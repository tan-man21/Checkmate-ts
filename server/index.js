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

//DATABASE CONNECTION
const sequelize = new Sequelize(process.env.DB_CONNECTION)
const sequelizeTest = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

//CONTROLLERS
const tasksController = require('./controllers/tasks_controller')
app.use('/tasks', tasksController)

const listsController = require('./controllers/lists_controller')
app.use('/lists', listsController)

const subtasksController = require('./controllers/subtasks_controller')
app.use('/subtasks', subtasksController)

// LISTEN
app.listen(PORT, async () => {
    await sequelizeTest();
    console.log(`Listening on port: ${process.env.PORT}`)
})