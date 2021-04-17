/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';

import image1 from '../../../image/header/header_1.jpg';
import image2 from '../../../image/header/header_2.jpg';
import image3 from '../../../image/header/header_3.jpg';
import image4 from '../../../image/header/header_4.jpg';
import image5 from '../../../image/header/header_5.jpg';
import logo from '../../../image/logos/logo-brand.png';
import ShoppingCartItem from '../../Home/ShoppingCart/ShoppingCartItem/ShoppingCartItem';
import './AllItem.css';

// import BackToTop from '../../Utilities/BactToTop/BackToTop';

const AllItem = () => {
  const ShoppingCard = [
    {
      id: 1,
      image: image1,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
    {
      id: 2,
      image: image2,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
    {
      id: 3,
      image: image3,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
    {
      id: 4,
      image: image4,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
    {
      id: 5,
      image: image5,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
    {
      id: 6,
      image: image3,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
  ];
  const history = useHistory();
  return (
    <>
      {/* <BackToTop /> */}
      <div className="container">
        <img
          onClick={() => history.push('/')}
          className="allItem__logo"
          src={logo}
          alt=""
        />
        <h2 className="font-primary">
          All <span className="text-primary">Foods </span>here
        </h2>
        <div className="allItem__container">
          {ShoppingCard.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
        </div>
        <h2 className="font-primary text-primary">Add Pagination Here...</h2>
      </div>
    </>
  );
};

export default AllItem;
