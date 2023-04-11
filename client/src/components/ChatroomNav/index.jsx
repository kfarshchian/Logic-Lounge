import { Box,} from "@mui/material"
import ChatNavEl from "../ChatNavEl";


function ChatroomNav({chatrooms,selectChatroom,selectedChatroom}) {
  return (
    <Box>
      {chatrooms.map((chatroom,index) => (
        <ChatNavEl key={index} chatroom={chatroom} selectChatroom={selectChatroom} selectedChatroom={selectChatroom}/>
      ))}
    </Box>
  )
}

export default ChatroomNav;