var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.get('/', function(request, response) {
  response.send('<h1>Hello coders</h1>')
})

io.on('connection', function(socket) {
  console.log('a user connected')
})

http.listen(3333, function() {
  console.log('listening on *:3333')
})