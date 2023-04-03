import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
// import { Button } from '@mui/material';
// import {motion} from 'framer-motion'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className='navbar'>
      <div className='logo'>
        {
          Auth.loggedIn() && (
            <>
              <Link 
                to='/'
              >
                Home
              </Link>
              <Link to={`/users/${Auth.getProfile().data._id}`}>
                Profile
              </Link>
              <Link to="/match">
                Find a Match
              </Link>
              <Link to='/chatroom'>
                Chatroom
              </Link>
            </>
          )
        }
      </div>
      <div className='page-links'>

      </div>
      <div className='user-links'>
        {Auth.loggedIn() ? (
          <>
            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
    // <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
    //   <div className="container flex-row justify-space-between-lg justify-center align-center">
    //     <div>
    //       <Link className="text-light" to="/">
    //         <h1 className="m-0">Tech Thoughts</h1>
    //       </Link>
    //       <p className="m-0">Get into the mind of a programmer.</p>
    //     </div>
    //     <div>
    //       {Auth.loggedIn() ? (
    //         <>
    //           <span>Hey there, {Auth.getProfile().data.username}!</span>
    //           <button className="btn btn-lg btn-light m-2" onClick={logout}>
    //             Logout
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link className="btn btn-lg btn-info m-2" to="/login">
    //             Login
    //           </Link>
    //           <Link className="btn btn-lg btn-light m-2" to="/signup">
    //             Signup
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </header>
    // Auth.loggedIn() && (
    //   pages.map(page => (
    //     <Link key={page.toLowerCase()} to={page !== 'Profile' ? `/${page}` : }>

    //     </Link>
    //   ))
    // )
  );
};

export default Header;
