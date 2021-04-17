/* eslint-disable react/self-closing-comp */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../image/logos/logo-brand.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <img className="footer__logo" src={logo} alt="" />
        <p className="footer__text">
          At Sushi Bar we serve authentic Japanese cuisine, including Sushi,
          Udon Noodles, and Donburi. We are known for being a “hidden jewel” of
          Manhattan also because of our unique and hidden location. Come find us
          and transport yourself to Tokyo.
        </p>
        <div className="underLine"></div>

        <div className="footer__content">
          <div className="footer__content--1">
            <p>+ 1-877-967-5362</p>
            <p className="footer__info">Eighth Avenue 487, New York</p>
            <p>info@jubayer.net</p>
          </div>
          <div className="footer__content--2">
            <p>Subscribe for receiving newsletters</p>
            <span className="footer__input--container">
              <input
                type="text"
                placeholder="Your Email"
                className="footer__content--input"
              />
              <FontAwesomeIcon className=" sendIcon" icon={faPaperPlane} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
