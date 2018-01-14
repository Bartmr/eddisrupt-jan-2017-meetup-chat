var express = require('express')

var http = require('http')
var socketIo = require('socket.io')
/* -------------------------------------------------------- */
/* ASSEMBLE AN EXPRESS APP TO SERVE STATIC FILES TO BROWSER */
/* -------------------------------------------------------- */

// Get an object representing our server from the package
var app = express()

app.use(
  // Again, grab some middleware that comes from the package
  // This one is for serving static files for the browser
  express.static('static')
)

var httpServer = http.createServer(app)

/* ------------------------------------- */
/* SET UP A REAL TIME COMMUNICATIONS APP */
/* ------------------------------------- */
var io = socketIo(httpServer)

io.on('connection', function(socket){
  console.log('a user connected')

  socket.on('disconnect', function(){
    console.log('user disconnected')
  })
})

/* ------------------------------------- */
/* ...AND FINALLY, OPEN THE SERVER PORTS */
/* ------------------------------------- */
httpServer.listen(3000, function (){
  console.log('Example app listening on port 3000!')
})