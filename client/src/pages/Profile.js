import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
// import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER, QUERY_ME} from "../utils/queries";

import Auth from '../utils/auth';

// const [matches, setMatches] = useState([]);

const ProfileBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(2),
}));

const MatchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  height: "200px",
  borderRadius: "20px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  margin: theme.spacing(1),
  backgroundColor: "#4F2683 ",
}));

const MatchImage = styled(Avatar)(({ theme }) => ({
  width: "96px",
  height: "96px",
  margin: theme.spacing(2),
}));

 function Profile() {

//   const { userId } = useParams(); 
  console.log('hit')
  const { loading, error, data } =  useQuery( QUERY_SINGLE_USER, {
    variables: {username: 'Anthony Angelos'}
  } ); // fetch the user data using GraphQL query and user ID
  let user ;
   if (data)  {
   user = data.user
   }

  console.log(data)

//   const user = data?.me || data?.user || {};

//   if (Auth.loggedIn() && Auth.getProfile().data._id === username) {
//     return <Navigate to="/me" />;
//   }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error loading user data.</div>;
  }

  

  const styles = {
    root: {
      flexGrow: 1,
      paddingTop: "18px",
      paddingBottom: "18px",
    },
    avatar: {
      width: "144px",
      height: "144px",
      margin: "16px",
    },
    name: {
      fontWeight: "bold",
      marginBottom: "25px",
    },
    bio: {
      marginBottom: "25px",
    },
    interest: {
      marginBottom: "25px",
    },
    button: {
      margin: "8px",
      backgroundColor: "#4F2683 ",
    },
  };

  return (
    <div style={styles.root}>
      <Grid container spacing={10} justifyContent="flex=end">
        <Grid item xs={10} sm={4} md={3}>
          <ProfileBox>
            <Avatar style={styles.avatar} />
            <Typography variant="h6" style={styles.name}>
              {user.username}
              {/* {userId ? `${user.username}`:''} */}
            </Typography>
            <Typography variant="body1" style={styles.bio}>
              {/* {skills} */}
            </Typography>
            <Typography variant="body1" style={styles.interest}>
              Interest
            </Typography>
            <Button variant="contained" color="primary" style={styles.button}>
              Edit Profile
            </Button>
          </ProfileBox>
        </Grid>
        {/* {matches.length > 0 && ( */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Matches
          </Typography>
          <Stack direction="column" justifyContent="center">
            {/* {matches.map(match => ( */}
            <MatchBox>
              <MatchImage />
              <Typography variant="h6" gutterBottom>
                Match Name
              </Typography>
              <Typography variant="body1">Match Bio</Typography>
            </MatchBox>
            <MatchBox>
              <MatchImage />
              <Typography variant="h6" gutterBottom>
                Match Name
              </Typography>
              <Typography variant="body1">Match Bio</Typography>
            </MatchBox>
            <MatchBox>
              <MatchImage />
              <Typography variant="h6" gutterBottom>
                Match Name
              </Typography>
              <Typography variant="body1">Match Bio</Typography>
            </MatchBox>
            {/* ))} */}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
