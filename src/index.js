import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Logement from './pages/Logement';
import Apropos from './pages/About';
import './styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/:idLogement' element={<Logement />} />
        <Route path='a-propos' element={<Apropos />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
