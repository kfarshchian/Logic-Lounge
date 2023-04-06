import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import {
  Button,
  TextField,
  FormControl,
  Typography,
  Box,
  MenuItem,
  Select,
  InputLabel,
  Checkbox,
  OutlinedInput,
  ListItemText,
} from '@mui/material';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // This allows us to list each in out selection
  const [skill, setSkill] = useState([]);
  const skillChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkill(typeof value === 'string' ? value.split(',') : value);
  };

  // This controls how the skills look when the popup menu renders
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const skills = [
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'Linux',
    'LinkedIn',
    'Python',
    'MySQL',
    'MongoDB',
    'GoLang',
    'Algorithms & Data Structures',
  ];

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
        <Typography variant='h6'>Sign Up</Typography>
        <div>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to='/'>back to the homepage.</Link>
            </p>
          ) : (
            <FormControl
              onSubmit={handleFormSubmit}
              sx={{
                border: 1,
                borderColor: '#4F2683',
                width: '20rem',
                padding: 5,
                borderRadius: 11,
                boxShadow: '3',
              }}
            >
              <form>
                <TextField
                  required
                  margin='normal'
                  variant='outlined'
                  helperText='Please create a unique username'
                  label='Username'
                  name='username'
                  onChange={handleChange}
                  value={formState.name}
                />
                <TextField
                  margin='normal'
                  variant='outlined'
                  required
                  label='Email'
                  name='email'
                  onChange={handleChange}
                  value={formState.email}
                />
                <TextField
                  margin='normal'
                  variant='outlined'
                  required
                  label='Password'
                  name='password'
                  type='password'
                  onChange={handleChange}
                  value={formState.password}
                />
                {/* This is for the skill the selection */}
                <FormControl margin='normal'>
                  <InputLabel>Skills</InputLabel>
                  <Select
                    sx={{ minWidth: '15rem', maxWidth: '20rem' }}
                    multiple
                    id='selection'
                    value={skill}
                    onChange={skillChange}
                    input={<OutlinedInput label='Skill' />}
                    renderValue={(selected) => selected.join(',')}
                    MenuProps={MenuProps}
                  >
                    {skills.map((newSkill) => (
                      <MenuItem key={newSkill} value={newSkill}>
                        <Checkbox checked={skill.indexOf(newSkill) > -1} />
                        <ListItemText primary={newSkill} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* NOTE: wtf is formik validation */}
                <Button
                  color='secondary'
                  sx={{ cursor: 'pointer', color: '#4F2683' }}
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

export default Signup;
