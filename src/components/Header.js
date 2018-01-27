import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <nav className="navbar navbar-custom navbar-light navbar-expand-sm bg-dark ">
      <NavLink className="nav-link text-light" to="/" activeClassName="active" exact={true}>Home</NavLink>
      <ul className="navbar-nav navbar-fixed-top">
        <li>
          <NavLink className="nav-link text-light" to="/gallery" activeClassName="active">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;