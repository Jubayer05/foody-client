/* eslint-disable prefer-spread */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const userData = useSelector((state) => state.allUserData);
  const foodItems = useSelector((state) => state.foodItems);
  const data = useSelector((state) => state.allOrder);
  const [orderData, setOrderData] = useState([]);

  const order = data.map((el) =>
    el.foodOrdered.map((item) => [
      {
        ...item,
        name: el.name,
        address: el.roadNo,
        contacts: el.contacts,
      },
    ])
  );
  const order2 = [].concat.apply([], order);

  useEffect(() => {
    setOrderData([].concat.apply([], order2));
  }, [data]);

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          borderBottom: '1px solid black',
          marginBottom: '20px',
        }}
      >
        Summary
      </h1>
      <h3>Total Orders: {orderData.length}</h3>
      <h3>Total Customers: {userData.length}</h3>
      <h3>Total FoodItems: {foodItems.length}</h3>
      <h3>Total Admins: 2</h3>
    </>
  );
};

export default Summary;
