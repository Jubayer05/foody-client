import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';
import {
  decQuantity,
  deleteItem,
  incQuantity,
} from '../../../../actions/foodCartAction';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(incQuantity(item));
  };
  const handleDecrease = () => {
    dispatch(decQuantity(item));
  };

  const handleDelete = () => {
    dispatch(deleteItem(item));
  };

  return (
    <TableRow className="cartItem__row">
      <TableCell component="th" scope="row">
        <img
          width="20%"
          className="cartItem__img"
          src={`http://localhost:5000/${item.foodImage}`}
          alt=""
        />
      </TableCell>
      <TableCell width="35%" align="center">
        <span className="cartItem__heading">{item.title}</span>
      </TableCell>
      <TableCell align="center" className="cartItem__price">
        <strong className="text-secondary">${item.price}</strong>
      </TableCell>
      <TableCell align="center">
        <span display="flex" className="cartItem__quantity">
          <span className="cartItem__iteration--num">{item.quantity}</span>
          <span className="cartItem__iteration--box">
            <FontAwesomeIcon
              onClick={handleIncrease}
              display="block"
              className="cartItem__iteration cartItem__iteration-1"
              icon={faPlus}
            />
            <FontAwesomeIcon
              onClick={handleDecrease}
              display="block"
              className="cartItem__iteration"
              icon={faMinus}
            />
          </span>
        </span>
      </TableCell>
      <TableCell align="center">
        <strong className="text-secondary">
          ${item.quantity * item.price}
        </strong>
      </TableCell>
      <TableCell align="center" className="cartItem__delete">
        <IconButton onClick={handleDelete}>
          <DeleteIcon className="deleteBtn" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
