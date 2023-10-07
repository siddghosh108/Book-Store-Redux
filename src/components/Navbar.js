import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a className="logo" href="/">
          Bookstore
        </a>
      </div>
      <ul className="links">
        {[
          {
            id: 1,
            path: '/',
            name: 'BOOKS',
          },
          {
            id: 2,
            path: '/categories',
            name: 'CATEGORIES',
          },
        ].map((link) => (
          <li key={link.id}>
            <NavLink className="nav-link" to={link.path}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="person-icon">
        <button type="submit" className="person">
          <FaUser />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
