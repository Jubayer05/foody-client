/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './LoginGoogleFB.css';
import facebook from '../../../image/logos/fb.png';
import google from '../../../image/logos/google.png';

const LoginGoogleFB = () => {
  return (
    <div>
      <p className="or-line">or</p>

      <div onClick={() => {}} className="google">
        <img src={google} className="google-img" alt="" />
        <span className="icon-font">Google</span>
        <span>&nbsp;</span>
      </div>

      <div onClick={() => {}} className="facebook">
        <img src={facebook} className="facebook-img" alt="" />
        <span className="icon-font">Facebook</span>
        <span>&nbsp;</span>
      </div>
    </div>
  );
};

export default LoginGoogleFB;
