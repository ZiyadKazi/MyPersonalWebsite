import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/NavBar';

function App() {
  

  return (
    
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    
  )
}

export default App
