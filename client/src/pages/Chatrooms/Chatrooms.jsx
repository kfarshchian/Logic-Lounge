import {io} from 'socket.io-client'

function Chatrooms() {
  const socket = io();
  socket.emit('test-query','This is a query')
  return (
    <div>Chatrooms</div>
  )
}

export default Chatrooms