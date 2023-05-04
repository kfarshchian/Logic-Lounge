import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import { Button, TextField, FormControl, Typography, Box } from '@mui/material';

const TutorLogin = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h6'>Tutor Log In</Typography>
        <div>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to='/profile'>to your profile.</Link>
            </p>
          ) : (
            <FormControl
              onSubmit={handleFormSubmit}
              sx={{
                border: 2,
                borderColor: '#4F2683',
                width: '20rem',
                padding: 5,
                borderRadius: 11,
                boxShadow: '3',
                margin: 5
              }}
            >
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TextField
                role='username-login'
                  margin='normal'
                  variant='outlined'
                  required
                  label='Username'
                  name='username'
                  type='username'
                  onChange={handleChange}
                  value={formState.username}
                />
                <TextField
                role='password-login'
                  margin='normal'
                  variant='outlined'
                  required
                  label='Password'
                  name='password'
                  type='password'
                  onChange={handleChange}
                  value={formState.password}
                />
                <Button
                  role='login-form-submit'
                  color='secondary'
                  aria-label='button'
                  sx={{ cursor: 'pointer', color: '#4F2683', marginTop:  1 }}
                  type='submit'
                  variant='outlined'
                >
                  Submit
                </Button>
              </form>
            </FormControl>
          )}
          {error && (
            <div className='my-3 p-3 bg-danger text-white'>{error.message}</div>
          )}
        </div>
      </Box>
    </>
  );
};

export default TutorLogin;