import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './appnavitem.scss'

const variants = {
  initial: {
    opacity: 0.8,
    background: 'rgba(68, 68, 68, 0)',
  },
  hover: {
    opacity: 1,
    background: 'rgba(68, 68, 68, 0.475)',
  },
  tap: {
    opacity: 1,
    background: 'rgba(68, 68, 68, 0.475)',
  }
}

function AppNavItem({handleClose,page,pageLink}) {
  return (
    <motion.div
      variants={variants}
      initial='initial'
      whileHover='hover'
      className='link-container'
      onClick={handleClose}
    >
      <Link 
        className='app-link'
        to={`${pageLink}`}
      >
        {page}
      </Link>
    </motion.div>
  )
}

export default AppNavItem