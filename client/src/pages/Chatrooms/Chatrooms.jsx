import { useEffect, useState } from 'react'
import {io} from 'socket.io-client'

function Chatrooms() {
  const [chatrooms, setChatrooms] = useState([])
  const socket = io();

  useEffect(()=>{
    socket.emit('QUERY_CHATROOMS')  
    socket.on('QUERY_CHATROOMS',(data)=>{
      setChatrooms(data);
    })
  },[socket])

  return (
    <div>{JSON.stringify(chatrooms)}</div>
  )
}

export default Chatrooms