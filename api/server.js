const express = require('express')
const recipesRouter = require('./recipes/recipes_router')
const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)

server.use('*', (req,res) => {
    res.json({api:'up'})
})
module.exports = server
