// import { Box } from '@mui/material'
import React from 'react'
import "./message.scss"
import { Typography } from '@mui/material'
import auth from '../../utils/auth'

const style = {
  userMessage: {
    background: '#c496ff',
  },
  message: {
    background: '#c396ff6c',
  },
  userMessageBody:{
    marginLeft: 'auto',
  },
  messageBody:{
    
  }
}

function Message({message}) {
  // console.log(auth.getProfile().data.username)
  // console.log(message.messageAuthor)
  return (
    <div
      className='message-body'
      style={(auth.getProfile().data.username === message.messageAuthor) ? style.userMessageBody : style.messageBody}
    >
      <div 
        className='message-author'
        // style={(auth.getProfile().data.username === message.messageAuthor) ? style.userMessageBody : style.messageBody}
      >
          <Typography>
            {message.messageAuthor}
          </Typography>
      </div>
      <div
        className='message-text'
        style={(auth.getProfile().data.username === message.messageAuthor) ? style.userMessage : style.message}
      >
        <Typography>
          {message.messageText}
        </Typography>
      </div>
    </div>
  )
}

export default Message