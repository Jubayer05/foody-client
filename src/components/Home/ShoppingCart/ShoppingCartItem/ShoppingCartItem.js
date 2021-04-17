import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCartItem.css';

const ShoppingCartItem = ({ item, handleFoodData }) => {
  return (
    <div className="shoppingCart__item p-3 mt-5">
      <img
        className="shoppingCart__image"
        src="https://i.ibb.co/0BKwnR8/Chef-1.png"
        alt=""
      />
      <br />
      <h4 className="pt-2">
        <Link
          className="shoppingCartItem__heading"
          to={`/foodDetail/${item.id}`}
        >
          {item.title}
        </Link>
      </h4>
      <p>{item.detail}</p>
      {/* <SimpleSnackbar item={item}/> */}
      <button
        type="button"
        className="primary-btn shoppingCartItem__btn"
        onClick={() => handleFoodData(item)}
      >
        add to cart
      </button>
    </div>
  );
};

export default ShoppingCartItem;
