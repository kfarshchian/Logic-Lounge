import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Auth from '../../utils/auth';

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
      backgroundColor: '#4F2683 '
    },
  };

  return (
    <div style={styles.root}>
      <Grid container spacing={10} justifyContent="flex=end">
        <Grid item xs={10} sm={4} md={3}>
          <ProfileBox>
            <Avatar style={styles.avatar} />
            <Typography variant="h6" style={styles.name}>
              Full Name
            </Typography>
            <Typography variant="body1" style={styles.bio}>
              Bio
            </Typography>
            <Typography variant="body1" style={styles.interest}>
              Interest
            </Typography>
            <Button variant="contained" color="primary" style={styles.button}>
              Edit Profile
            </Button>
          </ProfileBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Matches
          </Typography>
          <Stack direction="column" justifyContent="center">
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
          </Stack>
        </Grid>
      </Grid>
    </div>

    // const styles = {
    //     root: {
    //       flexGrow: 1,
    //     },
    //     avatar: {
    //       width: "144px",
    //       height: "144px",
    //       margin: "16px",
    //     },
    //     name: {
    //       fontWeight: "bold",
    //       marginBottom: "16px",
    //     },
    //     bio: {
    //       marginBottom: "16px",
    //     },
    //     button: {
    //       margin: "8px",
    //     },
    //     matchContainer: {
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       marginBottom: "16px",
    //     },
    //     matchBarContainer: {
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //       width: "100%",
    //       height: "48px",
    //       backgroundColor: "#eee",
    //       borderRadius: "24px",
    //       padding: "0 16px",
    //       marginBottom: "8px",
    //     },
    //     matchBarFill: {
    //       height: "100%",
    //       borderRadius: "24px",
    //       backgroundColor: "#3f51b5",
    //       transition: "width 0.5s",
    //     },
    //     matchBarLabel: {
    //       fontWeight: "bold",
    //       color: "#333",
    //     },
    //   };

    //   const matches = [
    //     { name: "Match 1", value: 0.8 },
    //     { name: "Match 2", value: 0.6 },
    //     { name: "Match 3", value: 0.4 },
    //     { name: "Match 4", value: 0.2 },
    //     { name: "Match 5", value: 0.1 },
    //   ];

    //   return (
    //     <div style={styles.root}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={12} sm={4} md={3}>
    //           <Avatar style={styles.avatar} />
    //           <Typography variant="h6" style={styles.name}>
    //             Full Name
    //           </Typography>
    //           <Typography variant="body1" style={styles.bio}>
    //             Bio
    //           </Typography>
    //         </Grid>
    //         <Grid item xs={12} sm={8} md={9}>
    //           Interest
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={4}>
    //           <Box style={styles.matchContainer}>
    //             {matches.map((match) => (
    //               <div key={match.name} style={styles.matchBarContainer}>
    //                 <div
    //                   style={{
    //                     ...styles.matchBarFill,
    //                     width: `${match.value * 100}%`,
    //                   }}
    //                 />
    //                 <Typography variant="body1" style={styles.matchBarLabel}>
    //                   {match.name}
    //                 </Typography>
    //               </div>
    //             ))}
    //           </Box>
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={8}>
    //           About Me
    //         </Grid>
    //         <Grid item xs={12}>
    //           <Button variant="contained" color="primary" style={styles.button}>
    //             Edit Profile
    //           </Button>
    //         </Grid>
    //       </Grid>
    //     </div>
    //   const styles = {
    //     root: {
    //       flexGrow: 1,
    //     },
    //     avatar: {
    //       width: "144px",
    //       height: "144px",
    //       margin: "16px",
    //     },
    //     name: {
    //       fontWeight: "bold",
    //       marginBottom: "16px",
    //     },
    //     bio: {
    //       marginBottom: "16px",
    //     },
    //     button: {
    //       margin: "8px",
    //     },
    //   };
    //   return (
    //     <div style={styles.root}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={12} sm={4} md={3}>
    //           <Avatar style={styles.avatar} />
    //           <Typography variant="h6" style={styles.name}>
    //             Full Name
    //           </Typography>
    //           <Typography variant="body1" style={styles.bio}>
    //             Bio
    //           </Typography>
    //         </Grid>
    //         <Grid item xs={12} sm={8} md={9}>
    //           Interest
    //         </Grid>
    //           <Button variant="contained" color="primary" style={styles.button}>
    //             Edit Profile
    //           </Button>
    //       </Grid>
    //     </div>
  );
}

export default Profile;
