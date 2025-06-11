import React from 'react';
import { useNavigate } from 'react-router-dom';
const IT = () => {
    const navigate = useNavigate();
  return (
    <div className="course-container">
      <h1>Information Technology (IT)</h1>
      <p>
        The Information Technology (IT) program focuses on the application of computer systems and networks to manage and process information. Students learn about software development, database management, network security, and web technologies.
      </p>
      <h2>Core Subjects</h2>
      <ul>
        <li>Data Structures and Algorithms</li>
        <li>Database Management Systems</li>
        <li>Web Development</li>
        <li>Network Security</li>
        <li>Software Engineering</li>
      </ul>
      <h2>Career Opportunities</h2>
      <p>
        Graduates can pursue careers as software developers, system analysts, network administrators, and IT consultants in various industries.
      </p>
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
export default IT;