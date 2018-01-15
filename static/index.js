// Fetch the objects that represent graphical elements on the screen
var messageBox = document.getElementById('message-container')
var inputContainer = document.getElementById('input-container')
var inputField = document.getElementById('input-field')
//

var socket = io()

inputContainer.addEventListener("submit", function () {
  socket.emit('chat message', inputField.value)
})

socket.on('chat message', function(msg){
  messageBox.innerHTML += '<li>' + msg + '</li>'
});