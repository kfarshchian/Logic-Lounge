import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
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
  flexDirection: 'row',
  justifyContent: 'center',
  height: '50px',
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
        <Box
          sx={{
            backgroundColor: '#4F2683',
            border: 'none',
            borderRadius: 'none',
            boxShadow: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            display: 'flex',
            maxWidth: '1500px',
            margin: 'auto',
          }}>
          <CardContent>
            <Stack direction="column" justifyContent="center">
              <BlockOneBox style={{ boxShadow: 'none' }}>
                <img src={Logo} width="175rem" alt="Logic Lounge Logo" />
              </BlockOneBox>
            </Stack>
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
          </CardContent>
        </Box>
      </div>

      {/*middle section*/}
      <Grid item xs={12} sm={6} md={4}>
        <BlockTitleBox>
          <Typography
            variant="h5"
            margin="15px"
            marginBottom={'10px'}
            sx={{
              fontSize: {
                lg: 32,
                md: 20,
                sm: 14,
                xs: 10,
                color: '#000000',
                textAlign: 'center',
                fontFamily: 'EB Garamond',
                fontWeight: '600',
              },
              wordWrap: 'beak-word',
              width: '75rem',
            }}>
            Pair your learning needs with one of our tutors...
          </Typography>
        </BlockTitleBox>
      </Grid>
      {/*cards with student and instructors*/}
      <Grid
        container
        spacing={0}
        direction={{ xs: 'row', md: 'row' }}
        sx={{ backgroundColor: '#ddcdc6' }}>
        <Box
          sx={{
            backgroundColor: '#ddcdc6',
            border: 'none',
            borderRadius: 'none',
            boxShadow: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            display: 'flex',
            maxWidth: '1500px',
            margin: 'auto',
          }}>
          <img
            src={StudentOutlined}
            height="275rem"
            alt="Student Outlined"
            alignItems="center"
          />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: '#00000',
                textAlign: 'center',
                fontFamily: 'EB Garamond',
                fontWeight: '600',
              }}>
              Tom
            </Typography>
            <Typography
              variant="body2"
              margin="25px"
              sx={{
                fontSize: {
                  lg: 18,
                  md: 14,
                  sm: 12,
                  xs: 10,
                  color: '#000000',
                  textAlign: 'center',
                  fontFamily: 'EB Garamond',
                  fontWeight: '500',
                },
                wordWrap: 'beak-word',
                width: '15rem',
              }}>
              Wants to learn more about AWS Lambda and S3
            </Typography>
          </CardContent>
        </Box>

        <Box
          sx={{
            backgroundColor: '#ddcdc6',
            border: 'none',
            borderRadius: 'none',
            boxShadow: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            display: 'flex',
            maxWidth: '1500px',
            margin: 'auto',
          }}>
          <Typography
            variant="body2"
            margin="25px"
            sx={{
              fontSize: {
                lg: 18,
                md: 14,
                sm: 12,
                xs: 10,
                color: '#000000',
                textAlign: 'center',
                fontFamily: 'EB Garamond',
                fontWeight: '500',
              },
              wordWrap: 'beak-word',
              width: '15rem',
            }}>
            Industry expert and AWS Certified Professional
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: '#00000',
              textAlign: 'center',
              fontFamily: 'EB Garamond',
              fontWeight: '600',
            }}>
            Michelle
          </Typography>
          <CardContent>
            <img
              src={FeaturedInstructor}
              height="275rem"
              alt="Student Outlined"
              alignItems="center"
            />
          </CardContent>
        </Box>
        <Box
          sx={{
            backgroundColor: '#ddcdc6',
            border: 'none',
            borderRadius: 'none',
            boxShadow: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
            display: 'flex',
            maxWidth: '1500px',
            margin: 'auto',
          }}>
          <CardContent>
            <img
              src={InstructorFilmstrip}
              height="500rem"
              alt="Filmstrip"
              alignItems="center"
            />
          </CardContent>
        </Box>
      </Grid>
      <Box
        sx={{
          backgroundColor: '#4F2683',
          border: 'none',
          borderRadius: 'none',
          boxShadow: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          flexDirection: 'column',
          flexWrap: 'wrap',
          display: 'flex',
          maxWidth: '1500px',
          margin: 'auto',
        }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: '#ffffff',
              textAlign: 'center',
              fontFamily: 'EB Garamond',
              fontWeight: '600',
            }}>
            Just sign-up, search and match!
          </Typography>
          <Link to="/signup">
            <Button
              style={{
                margin: 'auto',
                marginTop: '15px',
                display: 'flex',
                color: '#000000',
                cursor: 'pointer',
                backgroundColor: '#ddcdc6',
                fontFamily: 'EB Garamond',
                fontweight: '800',
                alignContent: 'center',
              }}
              type="submit">
              {' '}
              Sign-up
            </Button>
          </Link>
          <Typography
            variant="body2"
            margin="25px"
            sx={{
              fontSize: {
                lg: 18,
                md: 14,
                sm: 12,
                xs: 10,
                color: '#ffffff',
                textAlign: 'center',
                fontFamily: 'EB Garamond',
                fontWeight: '500',
              },
              wordWrap: 'break-word',
              width: '20rem',
            }}>
            Copyright 2023, Logic Lounge, LLC
          </Typography>
        </CardContent>
      </Box>
    </>
  );
}

export default Home;
