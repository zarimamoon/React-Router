import { useState } from 'react'
import Footer from './components/Footer';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import './index.css'

function App() {

  return (
    <>
      <div id="container">
      <div id="navbar">
        <Link to="/home">HOME</Link>
        <Link to="/blue">BLUE</Link>
        <Link to="/red">RED</Link>
      </div>
      <div id="main-section">
      <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/blue" element={<Blue />} />
       <Route path="/red" element={<Red />} /> 
       <Route path="/footer" element={<Footer />} /> 
      </Routes>
      </div>
      <div id="footer">
       <Link to="/home">HOME</Link>
        <Link to="/blue">BLUE</Link>
        <Link to="/red">RED</Link>
      </div>
      </div>
    </>
  )
}

export default App
