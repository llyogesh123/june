import React from 'react';
import screenshot from '../assets/screenshot.png'; // Adjust the path if needed
import Navbar from './NavBar';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h2>Welcome to Home</h2>
      <img src={screenshot} alt="Screenshot" />
    </div>
  );
};

export default Home;