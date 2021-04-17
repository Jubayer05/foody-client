import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';
import image1 from '../../../../image/chefs/Chef-1.jpg';

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  // console.log(foodCollection[foodIndex].quantity === 3);

  const handleIncrease = () => {
    if (quantity < 15) {
      setQuantity(quantity + 1);
    }
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <TableRow className="cartItem__row">
      <TableCell component="th" scope="row">
        <img width="20%" className="cartItem__img" src={item.image} alt="" />
      </TableCell>
      <TableCell width="35%" align="center">
        <span className="cartItem__heading">{item.title}</span>
      </TableCell>
      <TableCell align="center" className="cartItem__price">
        <strong className="text-secondary">${item.price}</strong>
      </TableCell>
      <TableCell align="center">
        <span display="flex" className="cartItem__quantity">
          <span className="cartItem__iteration--num">{quantity}</span>
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
        <strong className="text-secondary">$500</strong>
      </TableCell>
      <TableCell align="center" className="cartItem__delete">
        <IconButton onClick={() => {}}>
          <DeleteIcon className="deleteBtn" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
