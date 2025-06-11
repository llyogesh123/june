import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import CSE from './components/courses/CSE';
import IT from './components/courses/IT';
import AIDS from './components/courses/AIDS';
import ECE from './components/courses/ECE';
import CCE from './components/courses/CCE';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cse" element={<CSE />} />
        <Route path="/it" element={<IT />} />
        <Route path="/aids" element={<AIDS />} />
        <Route path="/ece" element={<ECE />} />
        <Route path="/cce" element={<CCE />} />
      </Routes>
    </Router>
  )
}

export default App