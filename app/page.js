"use client"

import React from 'react';
import Calculator from './calculator';

const HomePage = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f0f0f0',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '2rem',
  };

  const paragraphStyle = {
    color: '#555',
    fontSize: '1.2rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Chupa Epou!</h1>
      <p style={paragraphStyle}>#soVai</p>
      <Calculator></Calculator>
    </div>
  );
};
export default HomePage;

