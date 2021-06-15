// const express = require('express')
// import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
export const app = express()
// app.use(bodyParser)

const port = process.env.SERVER_PORT
// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('hello')
})

// handle registering a user
app.post('/api/1.0/users', (req, res) => {
    return res.status(200).json({ message: 'User created' })
})

// start the express server
app.listen(port || process.env.PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`)
})

// module.exports = app
