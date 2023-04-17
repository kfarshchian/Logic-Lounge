import './usermenu.scss'
import React from 'react'
import { motion } from 'framer-motion';
import AppNavItem from './../AppNavItem/index';
import auth from '../../utils/auth'
import { Backdrop } from '../Backdrop'

function UserMenu({logout,handleClose, pages, pageLinks, children}) {
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
  const handleCloseLogout = (e) => {
    e.preventDefault();
    handleClose()
    auth.logout();
  }
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e)=>e.stopPropagation()}
        className='user-menu'
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {auth.loggedIn() ? (
          <button 
            className='logout-btn'
            onClick={handleCloseLogout}
          >
            Log Out
          </button>
        ):(
          <>
            <AppNavItem handleClose={handleClose} page={'Log In'} pageLink={'/login'}/>
            <AppNavItem handleClose={handleClose} page={'Sign Up'} pageLink={'/signup'}/>
          </>
          
        )}
      </motion.div>
    </Backdrop>
  )
}

export default UserMenu