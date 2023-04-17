import { useEffect, useState } from 'react'
import Message from '../../components/Message';
import MessageForm from '../../components/MessageForm';
import './chatroom.scss'
import { useRef } from 'react';
import LoungeMenuBtn from '../../components/LoungeMenu/LoungeMenuBtn';

function Chatrooms({socket}) {
  const [chatrooms,setChatrooms] = useState([]);  
  const [selectedChat,setSelectedChat] = useState(null); //
  const [init, setInit] = useState(true);
  const messageContainerRef = useRef(null);
  //use effect fires on page open. Queries chatrooms
  useEffect(()=>{
    if(init){
      socket.emit('QUERY_CHATROOMS')
      setInit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(()=>{
    if(messageContainerRef.current){
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  },[chatrooms])

  

  //Socket listener for updated chatrooms; will update all of the current chatrooms when this query is recived
  socket.on('RETURN_DATA', async (data)=>{
    // console.log('Received query: QUERY_CHATROOMS')
    setChatrooms(await JSON.parse(data));
  })

  // Handler for selecting chatroom
  const selectChatroom  = (e) => {
    const id = e.target.getAttribute('chat-id');
    // setSelectedChat(chatrooms.find(chatroom => chatroom._id === id))
    setSelectedChat(id);
  }


  return (
    <>
      {chatrooms[0] ? (
        <div className='chatroom'>
        {/* Side navebar for the chatrooms */}
        
        {/* If a chat is selected, display the chatroom, otherwise display select chatroom */}
        {selectedChat ? (
          <div className='chat-container'>
            <div className='chat-header'>
              <LoungeMenuBtn chatrooms={chatrooms} selectChatroom={selectChatroom} selectedChatroom={selectedChat}/>
              <p className='title'>
                {chatrooms.find(chatroom => chatroom._id === selectedChat).chatroomName}
              </p>
            </div>
            {/* Map through the chatrooms */}
            {/* <div> */}
            <div 
              ref={messageContainerRef}
              className='message-container'
            >
              {
                chatrooms.find(chatroom => chatroom._id === selectedChat).messages.map((message,index) => (
                  <Message key={index} message={message}/>
                ))
              }
            </div>
            <MessageForm socket={socket} selectedChat={selectedChat}/>
            {/* </div> */}
          </div>
        ) : (
          <div className='chat-container'>
            <div className='chat-header'>
              <LoungeMenuBtn chatrooms={chatrooms} selectChatroom={selectChatroom} selectedChatroom={selectedChat}/>
              <p className='title'>
                {chatrooms.find(chatroom => chatroom.chatroomName === 'JavaScript').chatroomName}
              </p>
            </div>
            {/* Map through the chatrooms */}
            {/* <div> */}
            <div 
              ref={messageContainerRef}
              className='message-container'
            >
              {
                chatrooms.find(chatroom => chatroom.chatroomName === 'JavaScript').messages.map((message,index) => (
                  <Message key={index} message={message}/>
                ))
              }
            </div>
            <MessageForm socket={socket} selectedChat={chatrooms.find(chatroom => chatroom.chatroomName === 'JavaScript')._id}/>
            {/* </div> */}
          </div>
        )}
      </div>
      ):(
        <div>
          loading...
        </div>
      )
      }
    </>
  )
}

export default Chatrooms