import { Box } from '@mui/material'
import React from 'react'

function Message({message}) {
  return (
    <Box>
      <Box>
        {message.messageAuthor}
      </Box>
      <Box>
        {message.messageText}
      </Box>
    </Box>
  )
}

export default Message