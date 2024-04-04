// DEPENDENCIES
const lists = require('express').Router()
const db = require('../models')
const { List, Task, SubTask } = db

//FIND ALL LISTS
lists.get('/', async (req, res) => {
    try {
        const foundLists = await List.findAll()
        res.status(200).json(foundLists)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//FIND A SPECIFIC LIST
lists.get('/:id', async (req, res) => {
    try {
        const foundList = await List.findOne({
            where: { list_id: req.params.id },
            include: [
                {
                    model: Task, as: 'tasks',
                    include: [
                        {
                            model: SubTask, as: 'subtasks'
                        }
                    ]
                }
            ]
        })
        res.status(200).json(foundList)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//CREATE A LIST
lists.post('/', async (req, res) => {
    try {
        const {list_name} = req.body
        const newList = await List.create({list_name})
        res.status(200).json(newList)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//UPDATE LIST
lists.put('/:id', async (req, res) => {
    try {
        const updatedList = await List.update(
            req.body,
            { where: { list_id: req.params.id } }
        )
        res.status(200).json('Updated List!')
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//DELETE LIST
lists.delete('/:id', async (req, res) => {
    try {
        const deletedList = await List.destroy(
            { where: { list_id: req.params.id } }
        )
        res.status(200).json('Deleted List!')
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//EXPORT
module.exports = lists
