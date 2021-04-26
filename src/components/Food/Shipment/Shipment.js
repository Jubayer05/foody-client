/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useState } from 'react';
import {
  Button,
  createMuiTheme,
  ThemeProvider,
  Grid,
  Paper,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import './Shipment.css';
import ShipmentReviewItem from './ShipmentReviewItem/ShipmentReviewItem';
import { orderFood } from '../../../actions/foodCartAction';
import Navbar from '../../Home/Navbar/Navbar';

const initialState = {
  name: '',
  email: '',
  contacts: null,
  foodOrdered: [],
  roadNo: '',
};
const Shipment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [foodData, setFoodData] = useState([]);
  const [message, setMessage] = useState(null);
  const [orderData, setOrderData] = useState(initialState);
  // eslint-disable-next-line no-undef
  const userData = JSON.parse(sessionStorage.getItem('profile'))?.result;
  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 2500);
  }, [message]);

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

  const handleSubmit = () => {
    if (orderData.contacts && orderData.roadNo) {
      setOrderData({
        ...orderData,
        name: userData.name,
        email: userData.email,
        foodOrdered: foodData,
      });
      setMessage({
        status: 'success',
        message: 'Data saved for placing order😅',
      });
    } else {
      setMessage({ status: 'error', message: 'Please fill up the form' });
    }
  };

  const handlePlaceOrder = () => {
    if (orderData?.foodOrdered.length > 0) {
      dispatch(orderFood(orderData));
      setOrderData(initialState);
      alert('Your order has been successfully placed. Keep shopping😃😃');
      history.push('/seeAllItem');
    } else {
      alert('Please fill up the form and press save and continue button');
    }
  };

  return (
    <>
      <ThemeProvider theme={themeColor}>
        <Navbar itemColor="black" />
        <Grid container className="container shipment">
          <Grid item md={5} className="delivery__content">
            <h4 className="delivery__details">Your Delivery Details</h4>
            {message && (
              <Alert className="shipment__alert" severity={`${message.status}`}>
                {message.message}
              </Alert>
            )}
            <input
              type="text"
              className="shipment__input"
              name="name"
              defaultValue={userData.name}
              placeholder="Your Name"
              onChange={(e) =>
                setOrderData({ ...orderData, name: e.target.value })
              }
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
              onChange={(e) =>
                setOrderData({ ...orderData, contacts: e.target.value })
              }
            />

            <input
              type="text"
              className="shipment__input"
              name="address"
              placeholder="Road No or Address"
              onChange={(e) =>
                setOrderData({ ...orderData, roadNo: e.target.value })
              }
            />

            <input
              type="text"
              className="shipment__input"
              name="instruction"
              placeholder="Add Delivery Instructor"
            />

            <Button
              onClick={handleSubmit}
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
                  <tbody>
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
                  </tbody>
                </table>

                <Button
                  onClick={handlePlaceOrder}
                  className="placeOrder__btn"
                  style={{ outline: 'none' }}
                  variant="contained"
                  fullWidth
                  color="primary"
                >
                  Place Order
                </Button>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Shipment;
