import './loungemenu.scss'
import React from 'react'
import { motion } from 'framer-motion';
import { Backdrop } from '../Backdrop'
import LoungeMenuItem from './LoungeMenuItem';

const slideIn = {
  hidden: {
    width: 0,
    opacity: 0
  },
  visible: {
    width: '200px',
    opacity: 0.9,
    transition: {
      delay: 0.2,
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 1000,
    }
  },
  exit: {
    width: 0,
    opactiy: 0,
    transition:{
      duration: 0.1
    }
  }
}

function LoungeMenu({handleClose,chatrooms,selectChatroom,selectedChatroom}) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e)=>e.stopPropagation()}
        className='lounge-menu'
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {chatrooms.map((chatroom,index) => (
          <LoungeMenuItem key={index} handleClose={handleClose} chatroom={chatroom} selectChatroom={selectChatroom} selectedChatroom={selectedChatroom}/>
        ))}
      </motion.div>
    </Backdrop>
  )
}

export default LoungeMenu