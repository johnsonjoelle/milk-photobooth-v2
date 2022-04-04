import React, { useState } from 'react';
import HomePage from './HomePage';
import LegalPage from './LegalPage';
import FormPage from './FormPage';
import PhotoPage from './PhotoPage';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import logo from './img/MoonFarms_logo.png';

function App() {
  const [isRegistered, setRegistered] = useState('false');
  const formCompleted = (form) => {
    setRegistered(form);
    console.log(isRegistered);
  }

  // Menu Toggle function - https://reactgo.com/react-toggle-class/
  const [isActive, setActive] = useState('false');
  const toggleMenu = () => {
    setActive(!isActive);
  }

  return (
    <Router>
      <div className="App">
        <header id="header"> 
          <div className="logoSect">
            <Link to="moonmilk/">
              <img id="logo" className="nav-branding" src={logo} alt="Moon Farms" />
            </Link>
          </div> 
          <nav className="navbar">
            {/* Mobile Navbar */}
            <div className="toggle-button" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className={`toggle-nav ${isActive ? "" : "active"}`}>
              <ul className="toggle-nav-menu"> 
                <li className="nav-item">
                  <Link to="moonMilk/" className="headerlink nav-link">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link to="/legal" className="headerlink nav-link">LEGAL</Link>
                </li>
                <li className="nav-item">
                  <Link to="/form" className="headerlink nav-link">FORM</Link>
                </li>
                <li className="nav-item">
                  <Link to="/photobooth" className="headerlink nav-link">PHOTOBOOTH</Link>
                </li>
              </ul>
            </div>
            {/* Desktop Navbar */}
            <div className="navbar-links">
              <ul className="nav-menu"> 
                <li className="nav-item">
                  <Link to="moonMilk/" className="headerlink nav-link">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link to="/legal" className="headerlink nav-link">LEGAL</Link>
                </li>
                <li className="nav-item">
                  <Link to="/form" className="headerlink nav-link">FORM</Link>
                </li>
                <li className="nav-item">
                  <Link to="/photobooth" className="headerlink nav-link">PHOTOBOOTH</Link>
                </li>
              </ul>
            </div> 
          </nav> 
        </header>
        {/* Routes */}
        <Routes>
          <Route path="moonMilk/" element={<HomePage/>} />
          <Route path="/legal" element={<LegalPage/>} />
          <Route path="/form" element={<FormPage formCompleted={(form)=>formCompleted(form)}/>} />
          <Route path="/photobooth" element={<PhotoPage isRegistered={isRegistered}/>} />
        </Routes>
        {/* Footer */}
        <footer>
            <p className="copyright">Moon Farms &copy; 2022. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
