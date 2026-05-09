import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDark(true);
    }
  }, []);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  function toggleDarkMode() {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'dark') {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  }

  return (
    <nav>
      <Link to="/">🐾 Pet Adoption</Link>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul id="nav-menu" className={menuOpen ? 'open' : ''}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/pets" onClick={() => setMenuOpen(false)}>Pets</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li className="dropdown">
          <a href="#">Account &#9662;</a>
          <div className="dropdown-menu">
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          </div>
        </li>
        <li>
          <button id="dark-btn" onClick={toggleDarkMode}>
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
