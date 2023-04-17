import React from 'react'

/**
 * React functional component for a Chatroom Navivation Element
 */
function ChatNavEl({chatroom, selectedChatroom, selectChatroom}) {
  return (
    <div 
      onClick={selectChatroom} 
      chat-id={chatroom._id}
      style={{
        cursor: 'pointer'
      }}
    >
          {chatroom.chatroomName}
    </div>
  )
}

export default ChatNavEl