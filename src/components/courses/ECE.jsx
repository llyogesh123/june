import React from 'react';
import { useNavigate } from 'react-router-dom';
const ECE = () => {
    const navigate = useNavigate();
  return (
    <div className="course-container">
      <h1 className="course-title">Electronics and Communication Engineering (ECE)</h1>
      <p className="course-description">
        The Electronics and Communication Engineering (ECE) program focuses on the design, development, and application of electronic devices, circuits, and communication systems. Students learn about analog and digital electronics, signal processing, telecommunications, and embedded systems.
      </p>
      <ul className="course-topics">
        <li>Analog Electronics</li>
        <li>Digital Electronics</li>
        <li>Signal Processing</li>
        <li>Communication Systems</li>
        <li>Microprocessors and Microcontrollers</li>
      </ul>
      <button
                style={{
                    marginTop: '20px',
                    padding: '8px 18px',
                    borderRadius: '5px',
                    border: 'none',
                    background: '#1976d2',
                    color: '#fff',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '15px'
                }}
                onClick={() => navigate('/home')}
            >
                Home
            </button>
    </div>
  );
}
export default ECE;