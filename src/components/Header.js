import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderCarousel from './Carousel';

const Header = () => (
  <div>
    <nav className="navbar navbar-light navbar-expand-sm bg-dark">
      <NavLink className="nav-link text-light" to="/" activeClassName="active" exact={true}>Home</NavLink>
      <ul className="navbar-nav">
        <li>
          <NavLink className="nav-link text-light" to="/gallery" activeClassName="active">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
    <HeaderCarousel />
  </div>
);

export default Header;