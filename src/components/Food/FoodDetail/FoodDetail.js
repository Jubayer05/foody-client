/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Box, Grid } from '@material-ui/core';

import Navbar from '../../Home/Navbar/Navbar';
// import FoodData from '../../../FakeData/FakeData';
import image1 from '../../../image/chefs/Chef-2.jpg';
import './foodDetail.css';
// import SimpleSnackbar from '../../Utilities/Snackbar/Snackbar';

const FoodDetail = () => {
  const data = [
    {
      id: 1,
      image: 'http://',
      price: 50,
      title: 'This the food heading This the food headingThis the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
    {
      id: 2,
      image: 'http://',
      price: 50,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
  ];
  const { id } = useParams();
  const newId = parseInt(id, 10);
  const filteredData = data.find((element) => element.id === newId);

  const [itemNum, setItemNum] = useState(1);
  const increaseNum = () => {
    setItemNum(itemNum + 1);
  };
  const decreaseNum = () => {
    if (itemNum > 1) {
      setItemNum(itemNum - 1);
    }
  };
  const price = itemNum * filteredData.price;

  return (
    <>
      <Navbar itemColor="black" />
      <div className="foodDetail__container">
        <Grid container spacing={3}>
          <Grid item md={7} className="foodDetail__content">
            <h2>{filteredData.title}</h2>
            <p className="foodDetail__description">{filteredData.detail}</p>
            <Box display="flex" alignItems="center">
              <h4 className="text-primary foodDetail__price">${price}</h4>
              <span className="foodDetail__itemNum--container">
                <span onClick={decreaseNum} className="foodDetail__iteration">
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <span className="foodDetail__itemNum">{itemNum}</span>
                <span onClick={increaseNum} className="foodDetail__iteration">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </span>
            </Box>
            {/* <SimpleSnackbar /> */}
            <button className="foodDetail__btn" type="button">
              Add To Cart
            </button>
            <h1 className="text-primary foodDetail__carousel">
              Here Include Food Carousel
            </h1>
          </Grid>
          <Grid item md={5}>
            <img src={image1} className="foodDetail__image" alt="" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FoodDetail;
