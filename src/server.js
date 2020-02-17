import routes from './routes.js'

const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')

export const server = http.Server(app)

app.use(cors())
app.use(express.json())
app.use(routes)

export const socket = require('socket.io')(http)

socket.on('connection', function(socket) {
  console.log('a user connected')
})

socket.on('message-sent', function(socket) {
  console.log('A message was sent')
})