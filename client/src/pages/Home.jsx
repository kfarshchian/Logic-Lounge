import React from 'react';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
// import Logo from '../../src/logos/Logic Lounge - Tan.png';
// import StudentOutlined from '../../src/logos/studentOutlined.png';
// import InstructorFilmstrip from '../../src/logos/InstructorFilmstrip.png';
// import FeaturedInstructor from '../../src/logos/FeaturedInstructor.png';
// import { Link } from 'react-router-dom';
import './styles/Home.css';
import Card from '../components/Card/Card';
function Home() {
  return (
    <>
      <section className='homeCards'>
        <Card className='homeCardLeft'>
          hi
          <Card className='homeCardRight'>hi</Card>
        </Card>
      </section>
    </>
  );
}

export default Home;
