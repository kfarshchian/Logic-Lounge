import { useEffect, useState } from 'react'
import ChatroomNav from '../../components/ChatroomNav';



function Chatrooms({socket}) {
  const [chatrooms,setChatrooms] = useState([]);  
  const [selectedChat,setSelectedChat] = useState(null);

  //use effect fires on page open. Queries chatrooms
  useEffect(()=>{
    socket.emit('QUERY_CHATROOMS')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  //Socket listener for updated chatrooms; will update all of the current chatrooms
  socket.on('UPDATED_CHATROOMS', async (data)=>{
    setChatrooms(await JSON.parse(data));
  })

  //Handler for selecting chatroom
  const selectChatroom  = (e) => {
    const id = e.target.getAttribute('chat-id');
    setSelectedChat(chatrooms.find(chatroom => chatroom._id === id))
  }

  return (
    <div>
      {/* Side navebar for the chatrooms */}
      <ChatroomNav chatrooms={chatrooms} selectChatroom={selectChatroom} selectedChatroom={selectedChat}/>
      {/* If a chat is selected, display the chatname, otherwise display select chatroom */}
      {selectedChat ? (
        <div>
          {selectedChat.chatroomName}
        </div>
      ) : (
        <div>
          Select a Chatroom
        </div>
      )}
      {/* If a chat is selected display messages, otherise display nothing */}
      {selectedChat && (
        selectedChat.messages.map((message,index) => (
          <div key={index}>
            {JSON.stringify(message)}
          </div>
        ))
      )}
      {/* This will be a form eventually */}
    </div>
  )
}

export default Chatrooms