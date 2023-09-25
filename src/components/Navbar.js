import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <a className="logo" href="/">
          BOOKSTORE
        </a>
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

        <div className="person">
          <FaUser />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
