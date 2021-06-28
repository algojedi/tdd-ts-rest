// const express = require('express')
// import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'

dotenv.config()
const app = express()
// app.use(bodyParser)
app.use(helmet())
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const mockDB = { username: 'test', password: 'test', email: 'test@test.com' }

interface UserType {
  username: string
  password: string
  email: string
}

interface ErrorResponseBody {
  success: boolean
  message: string
  detail: string
}
// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('hello')
})

// handle registering a user
app.post('/api/1.0/users', (req, res) => {
  const { username, password, email }: UserType = req.body
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: 'invalid input', detail: 'one or more fields are blank or missing' })
    // ErrorResponseBody
  }
  return res.status(200).json({ message: 'User created', userId: 0 })
})

export default app
