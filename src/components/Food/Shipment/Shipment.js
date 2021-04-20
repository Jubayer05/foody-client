import React, { useEffect, useState } from 'react';
import {
  Button,
  createMuiTheme,
  ThemeProvider,
  Grid,
  Paper,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Shipment.css';
import image1 from '../../../image/header/header_1.jpg';
import image2 from '../../../image/header/header_2.jpg';
import image3 from '../../../image/header/header_3.jpg';
import ShipmentReviewItem from './ShipmentReviewItem/ShipmentReviewItem';
import Navbar from '../../Home/Navbar/Navbar';

const Shipment = () => {
  const [foodData, setFoodData] = useState([]);

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
  const foodCart = useSelector((state) => state.foodCart);
  useEffect(() => {
    setFoodData(foodCart);
  }, [foodCart]);
  const total = foodData
    .map((food) => food.quantity * food.price)
    .reduce((a, b) => a + b, 0);

  const tax = parseFloat((total * 0.08).toFixed(2));

  const handleSubmit = () => {};

  return (
    <>
      <ThemeProvider theme={themeColor}>
        <Navbar itemColor="black" />
        <Grid container className="container shipment">
          <Grid item md={5} className="delivery__content">
            <h4 className="delivery__details">Your Delivery Details</h4>
            <input
              type="text"
              className="shipment__input"
              name="name"
              placeholder="Your Name"
            />

            <input
              type="text"
              className="shipment__input"
              name="deliveryTo"
              defaultValue="Delivery to Door"
              placeholder="Pick Up From"
            />

            <input
              type="text"
              className="shipment__input"
              name="contact"
              placeholder="Contact Info"
            />

            <input
              type="text"
              className="shipment__input"
              name="address"
              placeholder="Road No or Address"
            />

            <input
              type="text"
              className="shipment__input"
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

              {foodData.map((item) => (
                <ShipmentReviewItem key={item._id} item={item} />
              ))}

              <Paper className="cart-box">
                <table className="cart-table">
                  <tr className="cart__border">
                    <th>Subtotal * {foodData.length} items</th>
                    <td className="text-right">${total}</td>
                  </tr>
                  <tr className="cart__border">
                    <th>State Tax</th>
                    <td className="text-right">${tax}</td>
                  </tr>
                  <tr className="cart__border">
                    <th>Delivery Fee</th>
                    <td className="text-right">$0</td>
                  </tr>
                  <tr className="cart__border">
                    <th>Total</th>
                    <td className="text-right">${total + tax}</td>
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
