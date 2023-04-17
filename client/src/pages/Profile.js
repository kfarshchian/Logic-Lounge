import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
  FormControl,
  OutlinedInput,
  Checkbox,
  InputLabel,
  Select,
  ListItemText,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { QUERY_SINGLE_USER } from "../utils/queries";
import { UPDATE_USER } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';
import { QUERY_SKILLS } from '../utils/queries';
import { MATCH_TUTOR } from "../utils/queries";



// import Auth from "../utils/auth";

const ProfileBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2),
}));

const MatchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '200px',
  width: '50%',
  borderRadius: '20px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  margin: theme.spacing(1),
  backgroundColor: '#4F2683 ',
  border: '5px solid white',
}));

const MatchImage = styled(Avatar)(({ theme }) => ({
  position: 'initial',
  width: '80px',
  height: '80px',
  margin: theme.spacing(2),
}));

function Profile() {
  // This will query the available skills from the database
  const { data: skillData } = useQuery(QUERY_SKILLS);
  const { loading, error,  data: tutorData } = useQuery(MATCH_TUTOR);
  console.log(tutorData);
  const { userId } = useParams();

  const { data: userData } = useQuery(QUERY_USER, {
    variables: { _id: userId },
  });

  const { data: userName } = useQuery(QUERY_SINGLE_USER, {
    variables: { id: userId },
  });
console.log(userName);
  // This will access the gql mutation by accessing the needed userId variable
  const [updateUser] = useMutation(UPDATE_USER, {
    variables: {userId}
  });
  
  const [profilePicture, setProfilePicture] = useState({
    img: '',
  });

  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const [formState, setFormState] = useState({
    skills: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSave = async (event) => {
    // save profile changes to database
    event.preventDefault();
    try {
      const { data } = await updateUser({
        variables: { ...formState },
      });
      console.log(data, 'err');
    } catch (err) {
      console.error(err);
    }
    setEditing(false);
  };

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

  const user = userName?.user || userName?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error loading user data.</div>;
  }

  const styles = {
    root: {
      backgroundColor: '#DDCDC6',
      flexGrow: 1,
      paddingTop: '18px',
      paddingBottom: '18px',
    },
    avatar: {
      width: '144px',
      height: '144px',
      margin: '16px',
      border: '5px solid white',
    },
    name: {
      fontWeight: 'bold',
      marginBottom: '25px',
    },
    bio: {
      marginBottom: '25px',
    },
    interest: {
      marginBottom: '25px',
    },
    button: {
      position: 'initial',
      margin: '8px',
      backgroundColor: '#4F2683 ',
    },
  };

  return (
    <div style={styles.root}>
      <Grid container spacing={10} justifyContent='flex=end'>
        <Grid item xs={10} sm={4} md={3}>
          <ProfileBox>
            {/* <ImageUpload/> */}
            {/* Need to render profile img */}
            {user ? (
              <>
                <Avatar style={styles.avatar} />
                <Typography variant='h6' style={styles.name}>
                  {user.username}
                </Typography>
                <Typography variant='body1' style={styles.bio}>
                  {/* {userData.skills} */}
                </Typography>
                {/* <Typography variant="body1" style={styles.interest}>
            Interest
          </Typography> */}
              </>
            ) : (
              'hit'
            )}
            {!editing ? (
              <Button
                variant='contained'
                color='primary'
                style={styles.button}
                onClick={handleEdit}
              >
                Edit Profile
              </Button>
            ) : (
              <>
                <TextField
                  type='file'
                  onChange={(event) => setProfilePicture(event.target.value)}
                  label=''
                  value={profilePicture.img}
                />
                {/* <TextField
                  label="Skills"
                  value={skills}
                  onChange={(event) => setSkills(event.target.value)}
                /> */}

                  <FormControl margin='normal'>
                    <form onSubmit={handleSave}>
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
                  <Button type='submit'>Save Profile</Button>
                  </form>
                  </FormControl>
              </>
            )}
          </ProfileBox>
        </Grid>
        {/* {matches.length > 0 && ( */}
         <Grid  item xs={12} sm={6} md={4} lg={5 }>
            <Typography variant="h4" gutterBottom>
              Matches your skills
            </Typography>
            <Stack direction="column" justifyContent="center">
              <MatchBox>
                <MatchImage src={tutorData.tutors[0].image}>
                  </MatchImage>
                <Typography variant="h6" gutterBottom>
                  {tutorData.tutors[0].tutorName}
                </Typography>
                <Typography variant="body1">
                  {tutorData.tutors[0].bio}
                  </Typography>
              </MatchBox>
            </Stack>
          </Grid>
          <Grid  item xs={12} sm={6} md={4} lg={5 }>
            <Typography variant="h4" gutterBottom>
              Matches your skills
            </Typography>
            <Stack direction="column" justifyContent="center">
              <MatchBox>
                <MatchImage src={tutorData.tutors[1].image}>
                  </MatchImage>
                <Typography variant="h6" gutterBottom>
                  {tutorData.tutors[1].tutorName}
                </Typography>
                <Typography variant="body1">
                  {tutorData.tutors[1].bio}
                  </Typography>
              </MatchBox>
            </Stack>
          </Grid>
          <Grid  item xs={12} sm={6} md={4} lg={5 }>
            <Typography variant="h4" gutterBottom>
              Matches your skills
            </Typography>
            <Stack direction="column" justifyContent="center">
              <MatchBox>
                <MatchImage src={tutorData.tutors[2].image}>
                  </MatchImage>
                <Typography variant="h6" gutterBottom>
                  {tutorData.tutors[2].tutorName}
                </Typography>
                <Typography variant="body1">
                  {tutorData.tutors[2].bio}
                  </Typography>
              </MatchBox>
            </Stack>
          </Grid>
      </Grid>
      
    </div>
  );
}

export default Profile;
