import React, { useState } from 'react';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import './ShoppingCart.css';
import { Link, useHistory } from 'react-router-dom';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';

const ShoppingCart = () => {
  const ShoppingCarts = [
    {
      id: 1,
      image: 'https://i.ibb.co/0BKwnR8/Chef-1.png',
      price: 50,
      quantity: 1,
      title: 'This the food heading 1',
      detail:
        'Food Details should be at least 50 Charecter so add validation here and not more than 150 charecter. ',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/0BKwnR8/Chef-1.png',
      price: 50,
      quantity: 2,
      title: 'This the food heading 2',
      detail:
        'Food Details should be at least 50 Charecter so add validation here ',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/0BKwnR8/Chef-1.png',
      price: 15,
      quantity: 1,
      title: 'This the food heading 3',
      detail:
        'Food Details should be at least 50 Charecter so add validation here ',
    },
    {
      id: 4,
      image: 'https://i.ibb.co/0BKwnR8/Chef-1.png',
      price: 25,
      quantity: 1,
      title: 'This the food heading 4',
      detail:
        'Food Details should be at least 50 Charecter so add validation here ',
    },
    {
      id: 5,
      image: 'https://i.ibb.co/0BKwnR8/Chef-1.png',
      price: 35,
      quantity: 1,
      title: 'This the food heading 5',
      detail:
        'Food Details should be at least 50 Charecter so add validation here ',
    },
  ];

  const [allFood, setAllFood] = useState([]);
  const onlyId = allFood.map((a) => a.id);
  const handleFoodData = (data) => {
    setAllFood([...allFood, data]);
  };

  const history = useHistory();

  return (
    <div className="container shoppingCart">
      <h2 className="shoppingCart__heading font-primary">
        Order Your <span className="text-primary"> Food</span>
      </h2>
      <div className="shoppingCartItem__container">
        {ShoppingCarts.map((item) => (
          <ShoppingCartItem
            item={item}
            handleFoodData={handleFoodData}
            key={item.id}
          />
        ))}
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

// TODO: SEt it
