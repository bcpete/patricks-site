import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Navbar, NavbarBrand, NavItem, Nav } from 'reactstrap';

const Header = () => (
  <nav className="navbar navbar-light navbar-expand-sm bg-dark">
    <NavLink className="navbar-brand nav-link text-light" to="/" activeClassName="active" exact={true}>Beard's Designs</NavLink>
    <ul className="navbar-nav">
      <li>
        <NavLink className="nav-link text-light" to="/gallery" activeClassName="active">Gallery</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-light" to="/contact" activeClassName="active">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

//<NavLink to="/" activeClassName="is-active" exact={true}>Beard's Designs</NavLink>
//<NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink>
//<NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
export default Header;