/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginEmail from '../LoginEmail/LoginEmail';
import LoginGoogleFB from '../LoginGoogleFB/LoginGoogleFB';
import logo from '../../../image/logos/logo-brand.png';
import './Login.css';

const Login = () => {
  const history = useHistory();
  return (
    <div className="container pb-5">
      <div className="text-center">
        <img
          onClick={() => history.push('/')}
          className="logo__main"
          src={logo}
          alt=""
        />
      </div>
      <LoginEmail />
      <LoginGoogleFB />
    </div>
  );
};

export default Login;
