/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';
import chef1 from '../../../image/chefs/Chef-1.jpg';
import chef2 from '../../../image/chefs/Chef-2.jpg';
import chef3 from '../../../image/chefs/Chef-3.jpg';
import chef4 from '../../../image/chefs/Chef-4.jpg';
import chef5 from '../../../image/chefs/Chef-5.jpg';
import ChefCompItem from './ChefCompItem/ChefCompItem';
import './ChefComp.css';

const sliderData = [
  { id: 1, image: chef1, name: 'Jhon Doe' },
  { id: 2, image: chef2, name: 'Smith Parkle' },
  { id: 3, image: chef3, name: 'Della Rios' },
  { id: 4, image: chef4, name: 'Mike Smith' },
  { id: 5, image: chef5, name: 'Alberta Park' },
];

export default class ChefComp extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="container chefComp">
        <h2 className="font-primary chefComp__heading">
          Our Master <span className="text-primary"> Chefs</span>
        </h2>
        <Slider {...settings}>
          {sliderData.map((item) => (
            <ChefCompItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    );
  }
}
