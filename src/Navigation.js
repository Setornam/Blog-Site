import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`mobile-menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>New Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
