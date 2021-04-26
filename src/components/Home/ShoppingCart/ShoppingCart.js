/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { useSelector } from 'react-redux';

import './ShoppingCart.css';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';

const ShoppingCart = () => {
  const [ShoppingCarts, setShoppingCarts] = useState([]);

  const foodItems = useSelector((state) => state.foodItems);
  const lastSixItems = foodItems.slice(Math.max(foodItems.length - 6, 0));

  useEffect(() => {
    setShoppingCarts(lastSixItems);
  }, [foodItems]);

  const history = useHistory();

  return (
    <div className="container shoppingCart">
      <h2 className="home-heade shoppingCart__heading font-primary">
        Order Your <span className="text-primary"> Food</span>
      </h2>
      <div className="shoppingCartItem__container">
        {ShoppingCarts.length > 0 ? (
          ShoppingCarts.map((item) => (
            <ShoppingCartItem item={item} key={item._id} />
          ))
        ) : (
          <CircularProgress color="secondary" />
        )}
      </div>
      <button
        onClick={(e) => history.push('/seeAllItem')}
        type="button"
        className="primary-btn seeMore-btn"
      >
        See More <ArrowForwardOutlinedIcon className="rightArrow-icon" />
      </button>
    </div>
  );
};

export default ShoppingCart;
