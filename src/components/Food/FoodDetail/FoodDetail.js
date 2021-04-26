/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Box, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../Home/Navbar/Navbar';
import './foodDetail.css';
import { addFoodToCart } from '../../../actions/foodCartAction';
// import SimpleSnackbar from '../../Utilities/Snackbar/Snackbar';

const FoodDetail = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.foodItems);

  const { id } = useParams();
  const filteredData = data.find((element) => element._id === id);

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

  const handleAddToCart = () => {
    filteredData.quantity = itemNum;
    dispatch(addFoodToCart(filteredData));
  };

  return (
    <>
      <Navbar itemColor="black" />
      <div className="foodDetail__container">
        <Grid container spacing={3} className="foodDetail__gridContainer">
          <Grid item sm={7} className="foodDetail__content">
            <h2>{filteredData.title}</h2>
            <p className="foodDetail__description">
              {filteredData.description}
            </p>
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
            <button
              onClick={handleAddToCart}
              className="foodDetail__btn"
              type="button"
            >
              Add To Cart
            </button>
            <h1 className="text-primary foodDetail__carousel">
              Here Include Food Carousel
            </h1>
          </Grid>
          <Grid item sm={5}>
            <img
              src={`http://localhost:5000/${filteredData.foodImage}`}
              className="foodDetail__image"
              alt=""
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FoodDetail;
