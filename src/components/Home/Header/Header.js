/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Header.css';

import image1 from '../../../image/header/header_1.jpg';
import image2 from '../../../image/header/header_2.jpg';
import image3 from '../../../image/header/header_3.jpg';
import image4 from '../../../image/header/header_4.jpg';
import image5 from '../../../image/header/header_5.jpg';
import HeaderItem from './HeaderItem/HeaderItem';

const slides = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image5,
  },
];

export default class Header extends Component {
  render() {
    const settings = {
      infinite: true,
      vertical: true,
      autoplay: true,
      fade: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
    };
    return (
      <div>
        <Slider className="header" {...settings}>
          {slides.map((item) => (
            <HeaderItem item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    );
  }
}
