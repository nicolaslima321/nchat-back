import Users from './Models/Users.js'

var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.get('/', function(request, response) {
  response.send('<h1>Hello coders</h1>')
  const user = new Users()
  user.name = 'Lorem'
  user.email = 'Lorem'
  user.password = 'Lorem'
  user.celphone = 'Lorem'
  user.save()
  var userData = user.find(1)
  console.log(userData)
  io.emit('message-received', { message: 'Lorem Ipsum' })
})

io.on('connection', function(socket) {
  console.log('a user connected')
})

io.on('message-sent', function(socket) {
  console.log('A message was sent')
})

http.listen(3333, function() {
  console.log('listening on *:3333')
})