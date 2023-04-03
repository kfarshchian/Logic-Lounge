import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Typography } from '@mui/material';
import "./navbar.scss"

const pageNames = ['Find a Match','Chatroom']
const pageLinks = ['/match','/chatroom']

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'>
          {/**Logo goes here */}
          <Typography 
            sx={{
              fontFamily: 'monospace',
            }}
            variant='h5'
          >
            Logic Lounge
          </Typography>
        </Link>
      </div>
      <div className='page-links'>
        <Link className='page-link' to='/'>
          Home
        </Link>
        {
          pageNames.map((page,index) => (
            <Link 
              className='page-link'
              key={`${page}`} 
              to={`${pageLinks[index]}`}
            >
              {page}
            </Link>
          ))
        }
        <Link 
          className='page-link'
          to='/profile'
        >
          Profile
        </Link>
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
            <Link 
              className='user-link'
              to="/login"
            >
              Login
            </Link>
            <Link 
              className='user-link'
              to='/signup'
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
