// DEPENDENCIES
const lists = require('express').Router()
const db = require('../models')
const { Lists } = db

//FIND ALL LISTS
lists.get('/', async (req, res) => {
    try {
        const foundLists = await lists.findAll()
        res.status(200).json(foundLists)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC LIST
lists.get('/:id', async (req, res) => {
    try {
        const foundList = await Lists.findOne({
            where: { list_id: req.params.id }
        })
        res.status(200).json(foundList)
    } catch (error) {
        res.status(500).json(error)
    }
})