import React from 'react';
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

import Navbar from '../../Home/Navbar/Navbar';
import CartItem from './CartItem/CartItem';
import image1 from '../../../image/header/header_1.jpg';
import image2 from '../../../image/header/header_2.jpg';
import image3 from '../../../image/header/header_3.jpg';
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

  // NOTE: OLD CODE
  const data = [
    {
      id: 1,
      image: image1,
      price: 250,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
    {
      id: 2,
      image: image2,
      price: 150,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
    {
      id: 3,
      image: image3,
      price: 50,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
    {
      id: 4,
      image: image1,
      price: 50,
      title: 'This the food heading',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
  ];

  const prices = [];

  const total = prices.reduce((a, b) => {
    return a + b;
  }, 0);
  const tax = parseFloat((total * 0.08).toFixed(2));

  const handleUpdateCart = () => {
    console.log(total, prices);
  };
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
                  {data.map((item) => (
                    <CartItem item={item} key={item.id} />
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
                        2000
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <strong>State Tax:</strong>
                      </StyledTableCell>
                      <StyledTableCell component="td" scope="row">
                        50
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <strong>Total:</strong>
                      </StyledTableCell>
                      <StyledTableCell component="td" scope="row">
                        2050
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
