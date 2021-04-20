import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './ShoppingCartItem.css';
import { addFoodToCart } from '../../../../actions/foodCartAction';

const ShoppingCartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleFoodData = () => {
    dispatch(addFoodToCart(item));
    // console.log(foodCart);
  };
  return (
    <div className="shoppingCart__item">
      <img
        className="shoppingCart__image"
        src={`http://localhost:5000/${item.foodImage}`}
        alt=""
      />
      <br />
      <h4>
        <Link
          className="shoppingCartItem__heading"
          to={`/foodDetail/${item.id}`}
        >
          {item.title}
        </Link>
      </h4>
      <p>{item.description}</p>
      {/* <SimpleSnackbar item={item}/> */}
      <button
        type="button"
        className="primary-btn shoppingCartItem__btn"
        onClick={handleFoodData}
      >
        add to cart
      </button>
    </div>
  );
};

export default ShoppingCartItem;
