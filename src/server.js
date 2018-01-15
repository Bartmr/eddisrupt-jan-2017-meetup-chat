var express = require('express')

var http = require('http')
var socketIo = require('socket.io')
/* -------------------------------------------------------- */
/* ASSEMBLE AN EXPRESS APP TO SERVE STATIC FILES TO BROWSER */
/* -------------------------------------------------------- */

// Get an object representing our express app from the package
var app = express()

app.use(
  // Again, grab some middleware that comes from the package
  // This one is for serving static files for the browser
  express.static('static')
)

// Create an HTTP listener and inject the express app we created
var httpServer = http.createServer(app)

/* ------------------------------------- */
/* SET UP A REAL TIME COMMUNICATIONS APP */
/* ------------------------------------- */
var io = socketIo(httpServer)

io.on('connection', function(socket){
  console.log('a user connected')

  /*
    Now that we have an object representing a connection,
    we can attach events to it
  */

  // When an user disconnects:
  socket.on('disconnect', function(){
    console.log('user disconnected')
  })

  // When an user sends a message
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);

    io.emit('chat message', msg)
  });
})

/* ------------------------------------- */
/* ...AND FINALLY, OPEN THE SERVER PORTS */
/* ------------------------------------- */
httpServer.listen(3000, function (){
  console.log('Example app listening on port 3000!')
})