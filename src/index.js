import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/Index.css';
import App from './App';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import Work from './pages/Work';
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/home' element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
