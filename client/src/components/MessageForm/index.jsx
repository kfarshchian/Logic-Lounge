import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Auth from '../../utils/auth'

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #4F2683',
  width: '97vw',
  padding: 5,
}

function MessageForm({socket,selectedChat}) {
  const [messageText,setMessageText] = useState('')

  const handleChange = (e) => {
    const {value} = e.target
    setMessageText(value);
  }

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('ADD_MESSAGE', {
      messageText: messageText,
      messageAuthor: Auth.getProfile().data.username,
      chatroomId: selectedChat
    });

    setMessageText('');
  }

  return (
    <form 
      className='message-form' 
      onSubmit={sendMessage}
      style={formStyle}
    >
        <TextField
          required
          margin='normal'
          variant='outlined'
          label='Message'
          name='message'
          helperText='Type message here'
          onChange={handleChange}
          value={messageText}
        />
        <Button
          color='secondary'
          sx={{ cursor: 'pointer', color: '#4F2683' }}
          type='submit'
          variant='outlined'
        >
          Send
        </Button>
    </form>
  )
}

export default MessageForm