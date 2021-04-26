import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './ShoppingCartItem.css';
import { addFoodToCart } from '../../../../actions/foodCartAction';
import ConsecutiveSnackbars from '../../../utilities/Snackbar';

const ShoppingCartItem = ({ item }) => {
  const dispatch = useDispatch();

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
          to={`/foodDetail/${item._id}`}
        >
          {item.title}
        </Link>
      </h4>
      <p style={{ marginTop: '-25px' }} className="shoppingCart__description">
        {item.description}
      </p>
      <p className="shoppingCartItem__price">
        <span className="item__price">${item.price}</span>
        <span className="shoppingCartItem__delivery">free delivery</span>
      </p>

      <ConsecutiveSnackbars item={item} />
    </div>
  );
};

export default ShoppingCartItem;
