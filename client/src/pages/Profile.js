import React from 'react';
import { makeStyles } from '@@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: theme.spacing(2),
    },
    name: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(2),
    },
    bio: {
      marginBottom: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  function Profile() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3}>
            <Avatar className={classes.avatar} />
            <Typography variant="h6" className={classes.name}>
              Full Name
            </Typography>
            <Typography variant="body1" className={classes.bio}>
              Bio
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
              Edit Profile
            </Button>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            Content Here
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Profile;
  