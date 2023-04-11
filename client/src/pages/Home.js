import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Logo from '../../src/logos/Logic Lounge - Tan.png';
import StudentOutlined from '../../src/logos/studentOutlined.png';
import InstructorFilmstrip from '../../src/logos/InstructorFilmstripCrop.png';
import FeaturedInstructor from '../../src/logos/FeaturedInstructor.png';
import { Link } from 'react-router-dom';

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Auth from '../../utils/auth';

const BlockOneBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '200px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  margin: theme.spacing(1),
  backgroundColor: '#4F2683 ',
}));

const BlockTitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '50px',
  backgroundColor: '#ddcdc6 ',
}));

const BlockTwoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '300px',
  backgroundColor: '#ddcdc6 ',
}));

function Home() {
  const styles = {
    root: {
      flexGrow: 1,
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    Logo: {
      width: '144px',
      height: '144px',
      margin: '16px',
    },
    button: {
      margin: '8px',
      backgroundColor: '#ddcdc6 ',
    },
  };

  return (
    <>
      <div style={styles.root}>
        {/*top section*/}
        <Grid item xs={12} sm={6} md={4}>
          <Stack direction="column" justifyContent="center">
            <BlockOneBox>
              <img src={Logo} width="100rem" alt="Logic Lounge Logo" />
              <Typography
                sx={{
                  color: '#FFFFFF',
                  variant: 'h8',
                }}>
                Logic Lounge
              </Typography>
            </BlockOneBox>
          </Stack>
        </Grid>
      </div>
      <div style={styles.root}>
        {/*middle section*/}
        <Grid item xs={12} sm={6} md={4}>
          <Stack direction="column" justifyContent="center">
            <BlockTitleBox>
              <Typography
                sx={{
                  color: '#FFFFFF',
                  variant: 'h4',
                  textAlign: 'left',
                  fontFamily: 'Crimson Text',
                }}>
                Pair your learning needs with one of our tutors...
              </Typography>
            </BlockTitleBox>
          </Stack>
        </Grid>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <BlockTwoBox>
            <Stack direction="column" justifyContent="center">
              <BlockTwoBox>
                <img
                  src={StudentOutlined}
                  height="200rem"
                  alt="Student Outlined"
                />
                <Typography variant="h6" gutterBottom>
                  Tom
                </Typography>
                <Typography variant="h8" gutterBottom>
                  Wants to learn more about AWS Lambda and S3
                </Typography>
              </BlockTwoBox>
            </Stack>
          </BlockTwoBox>
          <BlockTwoBox>
            <Stack direction="column" justifyContent="center">
              <BlockTwoBox>
                <Typography variant="h6" gutterBottom>
                  Michelle
                </Typography>
                <Typography variant="h8" gutterBottom>
                  Industry expert and AWS Certified Professional
                </Typography>
                <img
                  src={FeaturedInstructor}
                  height="200rem"
                  alt="Featured Instructor"
                />
              </BlockTwoBox>
            </Stack>
          </BlockTwoBox>
          <BlockTwoBox>
            <Stack direction="column" justifyContent="center">
              <BlockTwoBox>
                <img
                  src={InstructorFilmstrip}
                  height="400rem"
                  alt="Instructor Filmstrip"
                />
              </BlockTwoBox>
            </Stack>
          </BlockTwoBox>
        </Box>
        <Grid
          container
          Spacing={0}
          columnSpacing={{ xs: 12, sm: 6, md: 2 }}></Grid>
      </div>
      <div style={styles.root}>
        {/*bottom section*/}
        <Grid item xs={12} sm={6} md={4}>
          <Stack direction="column" justifyContent="center">
            <BlockOneBox>
              <Typography variant="h4" gutterBottom>
                Just sign-up, search and match!
              </Typography>
              <Link to="/signup">
                <Button
                  color="primary"
                  sx={{
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    backgroundColor: '#ddcdc6',
                    margin: '20px',
                  }}
                  type="submit">
                  Sign-up
                </Button>
              </Link>
              <Typography
                sx={{
                  color: '#FFFFFF',
                  variant: 'h8',
                }}>
                Copyright 2023, Logic Lounge, LLC.
              </Typography>
            </BlockOneBox>
          </Stack>
        </Grid>
      </div>
    </>
  );
}

export default Home;
