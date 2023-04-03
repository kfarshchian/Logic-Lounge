import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
// import { Button } from '@mui/material';
// import {motion} from 'framer-motion'

const pageNames = ['Profile','Find a Match','Chatroom']
const pageLinks = ['/profile/','/match','/chatroom']

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className='navbar'>
      <div className='logo'>
        {/**Logo goes here */}
        
      </div>
      <div className='page-links'>
        {
          Auth.loggedIn() && (
            <>
              <Link to='/'>
                Home
              </Link>
              {
                pageNames.map((page,index) => (
                  <Link 
                    key={`${page}`} 
                    to={page !== 'Profile' ? `${pageLinks[index]}` : `${pageLinks[index]}${Auth.getProfile().data._id}`}
                  >
                    {page}
                  </Link>
                ))
              }
            </>
          )
        }
      </div>
      <div className='user-links'>
        {Auth.loggedIn() ? (
          <>
            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>
            <Link to='/signup'>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
