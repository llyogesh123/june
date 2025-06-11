import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const handleDropdownClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    navigate('/');
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-dropdown')) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  // useEffect to run code when a course is selected
  useEffect(() => {
    if (selectedCourse) {
      // Example: log the selected course
      console.log(`Course selected: ${selectedCourse}`);
      // You can add more logic here (analytics, fetch, etc.)
      setSelectedCourse(null); // Reset after handling
    }
  }, [selectedCourse]);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-dropdown">
          <span
            className="navbar-title"
            onClick={handleDropdownClick}
            style={{ userSelect: 'none', cursor: 'pointer' }}
          >
            Courses ▾
          </span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => { setShowDropdown(false); setSelectedCourse('CSE'); }}>
                <Link to="/cse">CSE</Link>
              </li>
              <li onClick={() => { setShowDropdown(false); setSelectedCourse('IT'); }}>
                <Link to="/it">IT</Link>
              </li>
              <li onClick={() => { setShowDropdown(false); setSelectedCourse('AIDS'); }}>
                <Link to="/aids">AIDS</Link>
              </li>
              <li onClick={() => { setShowDropdown(false); setSelectedCourse('ECE'); }}>
                <Link to="/ece">ECE</Link>
              </li>
              <li onClick={() => { setShowDropdown(false); setSelectedCourse('CCE'); }}>
                <Link to="/cce">CCE</Link>
              </li>
            </ul>
          )}
        </li>
        <li style={{ marginLeft: 'auto' }}>
          <button
            className="logout-btn"
            onClick={handleLogout}
            style={{
              background: '#fff',
              color: '#1976d2',
              border: 'none',
              borderRadius: '5px',
              padding: '8px 18px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '15px',
              marginLeft: '20px'
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;