/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link, useHistory } from 'react-router-dom';
import { Badge, IconButton } from '@material-ui/core';

import logo from '../../../image/logos/logo-brand.png';
import './Navbar.css';

const Navbar = ({ itemColor }) => {
  const history = useHistory();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          onClick={() => history.push('/')}
          className="logo"
          src={logo}
          alt="Foody"
        />
      </div>
      <div className="navbar__link">
        <Link to="/" style={{ color: `${itemColor}` }}>
          Home
        </Link>
        <Link to="#service" href="#service" style={{ color: `${itemColor}` }}>
          About
        </Link>
        <Link to="/" style={{ color: `${itemColor}` }}>
          Contact
        </Link>
        <Link to="/login" style={{ color: `${itemColor}` }}>
          Login
        </Link>
        <Link to="/" style={{ color: `${itemColor}` }}>
          Welcome Guest
        </Link>
        <Link to="/admin" style={{ color: `${itemColor}` }}>
          Admin
        </Link>
        <Link to="/cart" style={{ color: `${itemColor}` }}>
          <IconButton aria-label="cart">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon style={{ color: `${itemColor}` }} />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
