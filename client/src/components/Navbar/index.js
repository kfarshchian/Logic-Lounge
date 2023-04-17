import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import "./navbar.scss"
import { Typography } from '@mui/material';
import PageLink from '../PageLink/PageLink';
import AppMenu from '../AppMenu';
import UserMenuButton from '../UserMenuButton';
import { motion } from 'framer-motion';

const pageNames = ['Find a Match','Lounges']
const pageLinks = ['/match','/chatrooms']

const buttonVariants = {
  initial: {
    opacity: 0.8,
    background: 'rgba(139, 139, 139, 0)',
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  tap: {
    scale: 0.95,
    opacity: 1,
    background: 'rgba(139, 139, 139, 0.2)',
    transition: {
      duration: 0.1,
    },
  }
}

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <div className='navbar'>
        {/* This is the logo section */}
        <AppMenu pages={pageNames} pageLinks={pageLinks}/>
        <div className='logo-container'>
          <Link 
            to='/'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img 
              className='logo'
              src='./logos/navbar-logo.png'
              alt='Logic Lounge logo'
            />
            <Typography 
              sx={{
                fontFamily: 'Franklin Gothic Medium'    
              }} 
              variant='h5'
            >
              Logic Lounge  
            </Typography> 
          </Link>
        </div>
        {/* This is the page link sections */}
        <div 
          className='page-links'
        >
          <PageLink page={'Home'} pageLink={'/'}/>
          {
            Auth.loggedIn() && (
              <>
                {/* This maps through the page names array and creates a page link Component matching that page */}
                {
                  pageNames.map((page,index) => (
                    <PageLink key={page} page={page} pageLink={pageLinks[index]}/>
                  ))
                }
                {/* Link to signed in user using the id from the JWT through Auth */}
                <PageLink page={'Profile'} pageLink={`/users/${Auth.getProfile().data._id}`}/>
              </>
            )
          }
          
        </div>
        {/* This is the user link sections */}
        <div className='user-links'>
          {Auth.loggedIn() ? (
            <>
              <motion.button 
                className='nav-logout'
                variants={buttonVariants}
                initial='initial'
                whileHover='hover'
                whileTap='tap'
                onClick={logout}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <> 
              <PageLink page='Login' pageLink="/login"/>
              <PageLink page='Sign Up' pageLink="/signup"/>
            </>
          )}
        </div>
        <UserMenuButton logout={logout}/>
      </div>
    </>
  );
};

export default Header;
