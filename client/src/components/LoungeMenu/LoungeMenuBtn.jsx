import './loungemenu.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import LoungeMenu from './LoungeMenu';

const variants = {
  initial: {
    opacity: 0.7,
  },
  hover: {
    opacity: 1,
  },
  tap: {
    opacity: 1,
  },
}

function LoungeMenuBtn({chatrooms,selectChatroom,selectedChatroom}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return (
    <div
      className='lounge-menu-btn'
    >
      <FontAwesomeIcon className='lounge-menu-icon' onClick={openMenu} icon={faMugHot} />
      <motion.p
        className='lounge-menu-text'
        onClick={openMenu}
        variants={variants}
        initial='initial'
        whileHover='hover'
        whileTap='tap'
      >
        Lounges
      </motion.p>
      <AnimatePresence
        initial={false}
        mode='sync'
      >
        { 
          menuOpen && 
          <LoungeMenu 
            handleClose={closeMenu} 
            chatrooms={chatrooms}
            selectChatroom={selectChatroom}
            selectedChatroom={selectedChatroom}
          />
        }
      </AnimatePresence>
    </div>
  )
}

export default LoungeMenuBtn