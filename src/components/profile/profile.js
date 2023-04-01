import React from "react";
import { makeStyles } from "@material-ui/material/styles";
import Avatar from "@material-ui/material/Avatar";
import Typography from "@material-ui/material/Typography";
import Grid from "@material-ui/material/Grid";
import Box from "@material-ui/material/Box";

const useStyles = makeStyles((theme) => ({
  profile: {
    backgroundColor: "#4F2683",
    color: "#FFFFFF",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(2),
  },
  bio: {
    marginBottom: theme.spacing(2),
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.profile}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Avatar
              className={classes.avatar}
              alt="Profile Picture"
              src="/path/to/profile-picture.jpg"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="h6" gutterBottom className={classes.bio}>
              Bio
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vel nisi luctus, tempor risus vel, tristique nibh. Nunc
              pellentesque velit lectus, eget efficitur purus elementum ac.
              Etiam non mauris eget mauris pellentesque euismod.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Interests
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Traveling{"\n"}- Hiking{"\n"}- Photography{"\n"}- Reading{"\n"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Profile;
