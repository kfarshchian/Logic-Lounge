import React from 'react'

/**
 * React functional component for a Chatroom Navivation Element
 */
function LoungeMenuItem({handleClose,chatroom, selectedChatroom, selectChatroom}) {
  const selectAndClose = (e) =>{
    selectChatroom(e);
    handleClose();
  }
  return (
    <button 
      className='lounge-menu-item'
      onClick={selectAndClose} 
      chat-id={chatroom._id}
      style={{
        cursor: 'pointer'
      }}
    >
          {chatroom.chatroomName}
    </button>
  )
}

export default LoungeMenuItem