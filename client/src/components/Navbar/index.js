import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import {motion} from 'framer-motion'
import "./navbar.scss"

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
            <h5 className='logo-text'>
              Logic Lounge
            </h5>  
          </Link>
        </div>
        <div className='page-links'>
          {
            pageNames.map((page,index) => (
              <motion.div
                className='motion-container'
                initial={{
                  
                }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.1
                  },
                }}
                whileTap={{
                  scale: 0.9
                }}
                key={`${page}`}
              >
                <Link 
                  className='page-link'
                  to={`${pageLinks[index]}`}
                >
                  {page}
                </Link>
              </motion.div>
            ))
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
              <motion.div
                className='motion-container'
                initial={{
                  
                }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.1
                  },
                }}
                whileTap={{
                  scale: 0.9
                }}
              >
                <Link 
                  className='user-link'
                  to="/login"
                >
                  Login
                </Link>
              </motion.div>
              <motion.div
                className='motion-container'
                initial={{
                  
                }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.1
                  },
                }}
                whileTap={{
                  scale: 0.9
                }}
              >
                <Link 
                  className='user-link'
                  to='/signup'
                >
                  Sign Up
                </Link>
              </motion.div>
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
