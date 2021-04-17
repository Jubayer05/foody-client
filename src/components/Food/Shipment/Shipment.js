import React, { useContext, useState } from 'react';
import {
  Button,
  createMuiTheme,
  ThemeProvider,
  Grid,
  Paper,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import image1 from '../../../image/header/header_1.jpg';
import image2 from '../../../image/header/header_2.jpg';
import image3 from '../../../image/header/header_3.jpg';
import ShipmentReviewItem from './ShipmentReviewItem/ShipmentReviewItem';

const Shipment = () => {
  const { register, handleSubmit, errors } = useForm();

  const foodCollectionTest = [
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
      title: 'This the food heading ',
      detail:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora ex inventore iste corporis! Optio unde temporibus similique error consequatur?',
    },
  ];

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

  return (
    <>
      <ThemeProvider theme={themeColor}>
        <Grid container className="container shipment">
          <Grid item md={5} className="delivery__content mt-5 pt-5 col-md-5">
            <h4 className="delivery__details">Your Delivery Details</h4>
            <input
              type="text"
              className="w-100 shipment__input"
              name="name"
              placeholder="Your Name"
            />

            <input
              type="text"
              className="w-100 shipment__input"
              name="deliveryTo"
              defaultValue="Delivery to Door"
              placeholder="Pick Up From"
            />

            <input
              type="text"
              className="w-100 shipment__input"
              name="contact"
              placeholder="Contact Info"
            />

            <input
              type="text"
              className="w-100 shipment__input"
              name="address"
              placeholder="Road No or Address"
            />

            <input
              type="text"
              className="w-100 shipment__input"
              name="instruction"
              placeholder="Add Delivery Instructor"
            />

            <Button
              onClick={handleSubmit(() => {})}
              className="shipment__btn"
              style={{ outline: 'none' }}
              variant="contained"
              fullWidth
              color="primary"
            >
              Save & Continue
            </Button>
          </Grid>
          <Grid item md={5}>
            <div className="delivery__review">
              <p className="delivery__review--main">
                From
                <span className="text-bold"> Bonani Plaza Restaurant GRP </span>
              </p>
              <p>
                Arriving in <strong>20-30</strong> Minutes
              </p>
              <p className="delivery__review--sub">120 Road No 8</p>

              {foodCollectionTest.map((item) => (
                <ShipmentReviewItem key={item.id} item={item} />
              ))}

              <Paper className="cart-box">
                <table className="cart-table">
                  <tr className="cart__border">
                    <th>Subtotal * 4 items</th>
                    <td className="text-right py-3">20</td>
                  </tr>
                  <tr className="cart__border">
                    <th>State Tax</th>
                    <td className="text-right py-3">$55</td>
                  </tr>
                  <tr className="cart__border">
                    <th>Delivery Fee</th>
                    <td className="text-right py-3">0</td>
                  </tr>
                  <tr className="cart__border">
                    <th>Total</th>
                    <td className="text-right py-3">$55</td>
                  </tr>
                </table>
                <Link to="/shipment" className="cart-link">
                  <Button
                    onClick={() => {}}
                    className="placeOrder__btn"
                    style={{ outline: 'none' }}
                    variant="contained"
                    fullWidth
                    color="primary"
                  >
                    Place Order
                  </Button>
                </Link>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Shipment;
