/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link, useHistory } from 'react-router-dom';
import { Badge, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../../image/logos/logo-brand.png';
import './Navbar.css';

const Navbar = ({ itemColor }) => {
  const adminData = JSON.parse(sessionStorage.getItem('admin'));
  const history = useHistory();
  const dispatch = useDispatch();
  const foodCartData = useSelector((state) => state.foodCart);
  const guestName = JSON.parse(
    sessionStorage.getItem('profile')
  )?.result.name.split(' ')[0];

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const myFunction = () => {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          onClick={() => history.push('/')}
          role="presentation"
          onMouseDown={() => {}}
          className="logo"
          src={logo}
          alt="Foody"
        />
      </div>
      <div className="navbar__link">
        <Link to="/" style={{ color: `${itemColor}` }}>
          Home
        </Link>
        <Link to="" style={{ color: `${itemColor}` }}>
          <span> Welcome {guestName || 'Guest'}</span>
        </Link>
        {guestName ? (
          <Link to="" onClick={handleLogout} style={{ color: `${itemColor}` }}>
            Logout
          </Link>
        ) : (
          <Link to="/login" style={{ color: `${itemColor}` }}>
            Login
          </Link>
        )}
        {adminData?.email ? (
          <Link to="/admin" style={{ color: `${itemColor}` }}>
            Admin
          </Link>
        ) : (
          <Link to="/notAdmin" style={{ color: `${itemColor}` }}>
            Admin
          </Link>
        )}
        <Link to="/cart">
          <IconButton aria-label="cart">
            <Badge badgeContent={foodCartData.length} color="secondary">
              <ShoppingCartOutlinedIcon style={{ color: `${itemColor}` }} />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
