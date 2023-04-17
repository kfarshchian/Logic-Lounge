import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatePresence } from 'framer-motion';
import AppNav from '../AppNav';
import "./appmenu.scss"

function AppMenu({pages,pageLinks,children}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return (
    <div
      className='app-menu-button'
    >
      <MenuIcon onClick={() => (menuOpen ? closeMenu() : openMenu())}/>
      <AnimatePresence
        initial={false}
        mode='sync'
      >
        {menuOpen && <AppNav menuOpen={menuOpen} handleClose={closeMenu} pages={pages} pageLinks={pageLinks}/>}
      </AnimatePresence>
    </div>
  )
}

export default AppMenu