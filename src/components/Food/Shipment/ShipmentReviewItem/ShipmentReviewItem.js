import React from 'react';
// import image1 from '../../../../image';
import './ShipmentReviewItem.css';

const ShipmentReviewItem = ({ item }) => {
  return (
    <div className="delivery__review--item">
      <table>
        <colgroup>
          <col span="1" style={{ width: '25%' }} />
          <col span="1" style={{ width: '50%' }} />
          <col span="1" style={{ width: '25%' }} />
        </colgroup>
        <td>
          <img className="delivery__review--img" src={item.image} alt="" />
        </td>
        <td>
          <p className="delivery__review--title text-bold">{item.title}</p>
          <p className="delivery__review--title2 delivery-small-font">
            Free Delivery
          </p>
        </td>
        <td className="delivery__review--right">
          <h6>${item.price} * 1</h6>
          <h6>${item.price * 1}</h6>
        </td>
      </table>
    </div>
  );
};

export default ShipmentReviewItem;
