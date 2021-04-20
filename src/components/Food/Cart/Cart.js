import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from '../../Home/Navbar/Navbar';
import CartItem from './CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const themeColor = createMuiTheme({
    palette: {
      primary: {
        main: '#ff4081',
      },
      secondary: {
        main: '#424242',
      },
    },
  });
  const StyledTableCell = withStyles((theme) => ({
    body: {
      fontSize: 16,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const [foodData, setFoodData] = useState([]);

  const foodCart = useSelector((state) => state.foodCart);

  useEffect(() => {
    setFoodData(foodCart);
  }, [foodCart]);

  const total = foodData
    .map((food) => food.quantity * food.price)
    .reduce((a, b) => a + b, 0);

  const tax = parseFloat((total * 0.08).toFixed(2));

  return (
    <ThemeProvider theme={themeColor}>
      <Navbar itemColor="black" />
      <div className="container cart">
        <Grid container>
          <Grid item md={8}>
            <TableContainer component={Paper} className="cartItem">
              <Table className="table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={2} align="center">
                      <strong>Product</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Price</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Quantity</strong>&nbsp;
                    </TableCell>
                    <TableCell align="right">
                      <strong>Total</strong>&nbsp;
                    </TableCell>
                    <TableCell align="right">&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {foodData.map((item) => (
                    <CartItem item={item} key={item._id} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={4} className="cart__right">
            <h3 className="cart__heading">COUPON</h3>
            <div className="coupon-box">
              <input
                className="coupon-input"
                type="text"
                placeholder="Coupon Code"
              />
              <Button
                type="button"
                className="coupon-btn"
                style={{ outline: 'none' }}
                variant="contained"
                color="primary"
              >
                Apply Coupon
              </Button>
            </div>
            <h3 className="cart__heading">Cart Totals</h3>
            <Paper className="cart-box">
              <TableContainer component={Paper}>
                <Table aria-label="customized table">
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <strong>Subtotal:</strong>
                      </StyledTableCell>
                      <StyledTableCell component="td" scope="row">
                        {total}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <strong>State Tax:</strong>
                      </StyledTableCell>
                      <StyledTableCell component="td" scope="row">
                        {tax}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <strong>Total:</strong>
                      </StyledTableCell>
                      <StyledTableCell component="td" scope="row">
                        {total + tax}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Link to="/shipment" className="cart-link">
                <Button
                  className="cart__btn"
                  style={{ outline: 'none' }}
                  variant="contained"
                  color="primary"
                >
                  Proceed to Checkout
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Cart;
