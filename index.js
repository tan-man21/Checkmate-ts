//DEPENDENCIES
const express = require('express')
const app = express()

// CONFIG/MIDDLEWARE
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())

//ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Checkmate'
    })
})

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})