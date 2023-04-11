import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { QUERY_SKILLS } from '../utils/queries';
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
    skills: [],
  });

  // Add a user to database
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // Query skills from database
  const { error: skillError, data: skillData } = useQuery(QUERY_SKILLS);

  console.log(skillData, skillError);
  //
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

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
  // const [skill, setSkill] = useState([]);

  // const skillChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setSkill(typeof value === 'string' ? value.split(',') : value);
  // };

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

  // const skills = [
  //   'JavaScript',
  //   'Git',
  //   'Golang',
  //   'Ruby on Rails',
  //   'Github',
  //   'Node.js',
  //   'MySQL',
  //   'MongoDB',
  //   'Express.js',
  //   'NoSQL',
  //   'HTML',
  //   'CSS',
  //   'React',
  //   'LinkedIn',
  //   'Python',
  //   'Algorithms & Data Structures',
  // ];

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
                    name='skills'
                    value={formState.skills}
                    onChange={handleChange}
                    input={<OutlinedInput label='Skill' />}
                    renderValue={(selected) => selected.join(',')}
                    MenuProps={MenuProps}
                  >
                    {/* This will render skills dynamically from database */}
                    {skillData
                      ? skillData.skills.map((skill) => (
                          <MenuItem key={skill.skillName} value={skill.skillName}>
                            <Checkbox
                              checked={
                                formState.skills.indexOf(skill.skillName) > -1
                              }
                            />
                            <ListItemText primary={skill.skillName} />
                          </MenuItem>
                        ))
                      : "No skills available a this time..."}
                  </Select>
                </FormControl>
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
