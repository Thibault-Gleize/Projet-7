import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Apropos from './pages/About';
import './styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='a-propos' element={<Apropos />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
