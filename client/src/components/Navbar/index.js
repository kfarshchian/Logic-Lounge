import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import {motion} from 'framer-motion'
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
        <motion.div 
          className='page-links'

        >
          {
            pageNames.map((page,index) => (
              <PageLink page={page} pageLink={pageLinks[index]}/>
            ))
          }
        </motion.div>
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
