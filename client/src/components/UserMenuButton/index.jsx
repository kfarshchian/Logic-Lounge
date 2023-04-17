import './usermenubutton.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import UserMenu from './../UserMenu/index';

function UserMenuButton({logout}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return (
    <div
      className='user-menu-button'
    >
      <FontAwesomeIcon onClick={openMenu} icon={faUser} />
      <AnimatePresence
        initial={false}
        mode='sync'
      >
        {menuOpen && <UserMenu logout={logout} handleClose={closeMenu}/>}
      </AnimatePresence>
    </div>
  )
}

export default UserMenuButton