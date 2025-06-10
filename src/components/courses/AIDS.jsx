import React from 'react';
import { useNavigate } from 'react-router-dom';
const AIDS = () => {
    const navigate = useNavigate();
    return (
        <div className="course-container">
        <h1>AIDS Course</h1>
        <p>This is the AIDS course page.</p>
        {/* Add more content related to the AIDS course here */}
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
export default AIDS;