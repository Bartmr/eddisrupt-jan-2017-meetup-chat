// Fetch the objects that represent graphical elements on the screen
var messageBox = document.getElementById('message-container')
var inputContainer = document.getElementById('input-container')
var inputField = document.getElementById('input-field')
//

var socket = io()

inputContainer.addEventListener("submit", function (event) {
  event.preventDefault()

  var valueToSend = inputField.value

  inputField.value = ''
  
  socket.emit('chat message', valueToSend)
})

socket.on('chat message', function(msg){
  messageBox.innerHTML += '<li>' + msg + '</li>'
});