import React from 'react';

const Summary = () => {
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
      <h3>Total Orders: 55</h3>
      <h3>Total Customers: 600</h3>
      <h3>Total FoodItems: 70</h3>
      <h3>Total Admins: 20</h3>
    </>
  );
};

export default Summary;
