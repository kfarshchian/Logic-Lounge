import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.sass';
import Card from '../components/Card/Card';
import Illustration from '../assets/9 SCENE.svg'
function Home() {
  return (
    <div className='homeCardsContainer'>
      <section className='homeCards'>
        <Card className='homeCardLeft'>
          <div className='leftCardContent'>
            <div>

            <img
              className='logo'
              src='./logos/navbar-logo.png'
              alt='Logic Lounge logo'
              style={{height: '10rem'}}
              />
              </div>
            {/* <h3>Logic Lounge</h3> */}
            <h2>
              Welcome to Logic Lounge, the premier peer-to-peer tutoring
              platform that bridges the gap between curiosity and expertise!
            </h2>
            <Link to={'/signup'}>
              <button className='btn'>Get Started</button>
            </Link>
          </div>
          <Card className='homeCardRight'>
            <img src={Illustration} alt='remote learning illustration' />
          </Card>
        </Card>
      </section>
    </div>
  );
}

export default Home;
