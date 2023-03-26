import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/layout';
import Home from './components/home/home';
import Login from './components/login or signup/login';
import Profile from './components/profile/profile';
import Tutor from './components/tutormatch/tutor';
import Chatroom from './components/chatroom/chatroom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />}/>
        <Route path="login" index element={<Login />} />
        <Route path="profile" index element={<Profile />} />
        <Route path="tutor" index element={<Tutor />} />
        <Route path="chatroom" index element={<Chatroom />} />
      </Route>
    </Routes>
  );
}

export default App;
