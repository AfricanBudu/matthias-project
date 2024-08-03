import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import Overlay from './pages/Home/overlay'


function App() {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overlay" element={<Overlay />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
