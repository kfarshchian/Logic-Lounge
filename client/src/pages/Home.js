import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Logo from '../../src/logos/Logic Lounge - Tan.png';
import StudentOutlined from '../../src/logos/studentOutlined.png';
import InstructorFilmstrip from '../../src/logos/InstructorFilmstrip.png';
import FeaturedInstructor from '../../src/logos/FeaturedInstructor.png';
import { Link } from 'react-router-dom';

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
      position: 'initial',
      margin: '8px',
      backgroundColor: '#ddcdc6 ',
      color: 'black',
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
                variant="h3"
                sx={{
                  color: '#ddcdc6',

                  textAlign: 'left',
                  fontFamily: 'EB Garamond',
                  fontWeight: '500',
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
                variant="h5"
                margin="15px"
                sx={{
                  color: '#000000',

                  textAlign: 'left',
                  fontFamily: 'EB Garamond',
                  fontWeight: '500',
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
                <Typography
                  variant="h4"
                  sx={{
                    color: '#000000',

                    textAlign: 'left',
                    fontFamily: 'EB Garamond',
                    fontweight: 'bold',
                  }}>
                  Tom
                </Typography>
                <Typography
                  variant="h8"
                  sx={{
                    color: '#000000',

                    textAlign: 'left',
                    fontFamily: 'EB Garamond',
                    fontweight: 'bold',
                    padding: '10px',
                  }}>
                  Wants to learn more about AWS Lambda and S3
                </Typography>
              </BlockTwoBox>
            </Stack>
          </BlockTwoBox>
          <BlockTwoBox>
            <Stack direction="column" justifyContent="center">
              <BlockTwoBox>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#000000',

                    textAlign: 'left',
                    fontFamily: 'EB Garamond',
                    fontweight: 'bold',
                  }}>
                  Michelle
                </Typography>
                <Typography
                  variant="h8"
                  sx={{
                    color: '#000000',

                    textAlign: 'left',
                    fontFamily: 'EB Garamond',
                    fontweight: '600',
                    padding: '10px',
                  }}>
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
            <Stack
              direction="row"
              justifyContent="center"
              justifyItems="center">
              <BlockTwoBox>
                <img
                  src={InstructorFilmstrip}
                  height="375rem"
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
              <Typography
                variant="h4"
                sx={{
                  color: '#ffffff',
                  textAlign: 'left',
                  fontFamily: 'EB Garamond',
                  fontweight: 'bold',
                }}>
                Just sign-up, search and match!
              </Typography>
              <Link to="/signup">
                <Button
                  color="primary"
                  sx={{
                    cursor: 'pointer',
                    position: 'initial',
                    backgroundColor: '#ddcdc6',
                    fontFamily: 'EB Garamond',
                    fontweight: '800',
                    color: '#000000',
                    margin: '20px',
                  }}
                  type="submit">
                  Sign-up
                </Button>
              </Link>
              <Typography
                sx={{
                  color: '#ffffff',
                  variant: 'h8',
                  textAlign: 'left',
                  fontFamily: 'EB Garamond',
                  fontweight: 'bold',
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
