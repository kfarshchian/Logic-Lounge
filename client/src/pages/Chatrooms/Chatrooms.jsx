import { useEffect, useState } from 'react'
import ChatroomNav from '../../components/ChatroomNav';
import { Box, Typography } from '@mui/material';
import Message from '../../components/Message';
import MessageForm from '../../components/MessageForm';



function Chatrooms({socket}) {
  const [chatrooms,setChatrooms] = useState([]);  
  const [selectedChat,setSelectedChat] = useState(null);
  const [init, setInit] = useState(true);
  //use effect fires on page open. Queries chatrooms
  useEffect(()=>{
    if(init){
      socket.emit('QUERY_CHATROOMS')
      setInit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  

  //Socket listener for updated chatrooms; will update all of the current chatrooms when this query is recived
  socket.on('RETURN_DATA', async (data)=>{
    console.log('Received query: QUERY_CHATROOMS')
    setChatrooms(await JSON.parse(data));
  })

  //Handler for selecting chatroom
  const selectChatroom  = (e) => {
    const id = e.target.getAttribute('chat-id');
    // setSelectedChat(chatrooms.find(chatroom => chatroom._id === id))
    setSelectedChat(id);
  }


  return (
    <Box>
      {/* Side navebar for the chatrooms */}
      <ChatroomNav chatrooms={chatrooms} selectChatroom={selectChatroom} selectedChatroom={selectedChat}/>
      {/* If a chat is selected, display the chatroom, otherwise display select chatroom */}
      {selectedChat ? (
        <>
          <Box className='chatroom'>
            {selectedChat.chatroomName}
          </Box>
          {/* Map through the chatrooms */}
          <Box className='message-container'>
            {
              chatrooms.find(chatroom => chatroom._id === selectedChat).messages.map((message,index) => (
                <Message key={index} message={message}/>
              ))
            }
          </Box>
          <MessageForm socket={socket} selectedChat={selectedChat}/>
        </>
      ) : (
        <Typography>
          Select a Chatroom
        </Typography>
      )}
    </Box>
  )
}

export default Chatrooms