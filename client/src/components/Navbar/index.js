import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
// import {motion} from 'framer-motion'
import "./navbar.scss"
import { Typography } from '@mui/material';
import PageLink from '../PageLink/PageLink';

const pageNames = ['Home', 'Profile','Find a Match','Chatroom']
const pageLinks = ['/','/profile','/match','chatroom']

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <div className='navbar'>
        {/* This is the logo section */}
        <div className='logo'>
          <Link to='/'>
            {/**Logo goes here */}
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
          {
            // This maps through the page names array and creates a page link Component matching that page
            pageNames.map((page,index) => (
              <PageLink key={page} page={page} pageLink={pageLinks[index]}/>
            ))
          }
        </div>
        {/* This is the user link sections */}
        <div className='user-links'>
          {Auth.loggedIn() ? (
            <>
              <button onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <> 
              <PageLink page='Login' pageLink="/login"/>
              <PageLink page='Sign Up' pageLink="/signup"/>
            </>
          )}
        </div>
        <div className='navbar app'>

        </div>
      </div>
    </>
  );
};

export default Header;
