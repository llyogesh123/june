import React from 'react';
import { useNavigate } from 'react-router-dom';
const CCE = () => {
    const navigate = useNavigate();
    return (
        <div className="cce-container">
        <h1>CCE Course Information</h1>
        <p>Welcome to the CCE course page. Here you will find all the necessary information about the CCE curriculum, resources, and more.</p>
        {/* Add more content related to CCE here */}
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
export default CCE;