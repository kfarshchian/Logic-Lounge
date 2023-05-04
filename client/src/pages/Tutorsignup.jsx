import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_TUTOR } from '../utils/mutations';
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
// import { UserImage } from '../components/ImageUpload/UserImage';
// import {UploadWidget} from '../components/ImageUpload/UploadWidget'

const TutorSignup = () => {
  const [formState, setFormState] = useState({
    tutorName: '',
    email: '',
    password: '',
    bio: '',
    skills: [],
  });
  
console.log(formState);
  // Add a user to database
  const [addTutor, { error, data }] = useMutation(ADD_TUTOR);

  // Query skills from database
  const { data: skillData } = useQuery(QUERY_SKILLS);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    try {
      const { data } = await addTutor({
        variables: { ...formState },
      });
      Auth.tutorLogin(data.addTutor.token);
    } catch (e) {
      console.error(e);
    }
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
        <Typography variant='h6'>Tutor Sign Up</Typography>
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
              border: 2,
              borderColor: '#4F2683',
              width: '20rem',
              padding: 5,
              borderRadius: 11,
              boxShadow: '3',
              margin: 5
            }}
            >
                {/* <UserImage/> */}
                {/* <UploadWidget/> */}
              <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <TextField
                  required
                  margin='normal'
                  variant='outlined'
                  label='Username'
                  name='tutorName'
                  fullWidth
                  onChange={handleChange}
                  value={formState.tutorName}
                />
                <TextField
                fullWidth
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
                  fullWidth
                  required
                  label='Password'
                  name='password'
                  type='password'
                  onChange={handleChange}
                  value={formState.password}
                />
                <TextField
                  margin='normal'
                  variant='outlined'
                  fullWidth
                  label='Bio'
                  multiline
                  rows={4}
                  name='bio'
                  onChange={handleChange}
                  value={formState.bio}
                />
                {/* This is for the skill the selection */}
                <FormControl margin='normal'>
                  <InputLabel>Skills</InputLabel>
                  <Select
                    sx={{ minWidth: '20rem', maxWidth: '20rem' }}
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
                          <MenuItem key={skill._id} value={skill.skillName}>
                            <Checkbox
                              checked={
                                formState.skills.indexOf(skill.skillName) > -1
                              }
                            />
                            <ListItemText primary={skill.skillName} />
                          </MenuItem>
                        ))
                      : 'No skills available at this time...'}
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

export default TutorSignup;