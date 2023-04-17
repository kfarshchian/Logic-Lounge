import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Auth from '../../utils/auth'
import './messageform.scss'

// const formStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   border: '1px solid #4F2683',
//   height: ''
//   // width: '98.5vw',
//   // padding: 5,
// }

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
    >
        <div
          className='message' 
        >
          <TextField
            required
            margin='none'
            variant='outlined'
            label='Message'
            name='message'
            helperText='Type message here'
            onChange={handleChange}
            value={messageText}
          />
        </div>
        <div className='button-container'>
          <Button
            color='secondary'
            sx={{ cursor: 'pointer', color: '#4F2683' }}
            type='submit'
            variant='outlined'
          >
            Send
          </Button>
        </div>
    </form>
  )
}

export default MessageForm