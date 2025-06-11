import React from 'react';
import { useNavigate } from 'react-router-dom';
const CSE = () => {
    const navigate = useNavigate();
  return (
    <div className="course-container">
      <h1 className="course-title">CSE (Computer Science and Engineering)</h1>
      <p className="course-description">
        The Computer Science and Engineering (CSE) program focuses on the design, development, and application of computer systems and software. It covers a wide range of topics including algorithms, data structures, computer architecture, operating systems, databases, networking, and artificial intelligence.
      </p>
      <h2 className="course-modules-title">Modules Offered:</h2>
      <ul className="course-modules-list">
        <li>Introduction to Programming</li>
        <li>Data Structures and Algorithms</li>
        <li>Computer Networks</li>
        <li>Database Management Systems</li>
        <li>Operating Systems</li>
        <li>Software Engineering</li>
        <li>Web Development</li>
        <li>Machine Learning</li>
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
export default CSE;