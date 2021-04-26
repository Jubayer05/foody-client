/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import './LoginGoogleFB.css';
import facebook from '../../../image/logos/fb.png';
import google from '../../../image/logos/google.png';
import { googleProvider } from '../../../firebase';

const LoginGoogleFB = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: '/' } };

  const loginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((response) => {
        const { user, credential } = response;
        const result = {
          name: user.displayName,
          photoUrl: user.photoURL,
          email: user.email,
          googleId: response.additionalUserInfo.profile.id,
        };
        const token = credential.idToken;
        dispatch({
          type: 'AUTH',
          payload: {
            accessToken: credential.accessToken,
            token,
            result,
          },
        });
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p className="or-line">or</p>

      <div onClick={loginWithGoogle} className="google">
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
