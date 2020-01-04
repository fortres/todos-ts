import React from 'react';
import { NavLink } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper px1">
      <NavLink to="/" className="brand-logo">React + TypeScript</NavLink>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">Список дел</NavLink></li>
        <li><NavLink to="/about">Информация</NavLink></li>
      </ul>
    </div>
  </nav>
);