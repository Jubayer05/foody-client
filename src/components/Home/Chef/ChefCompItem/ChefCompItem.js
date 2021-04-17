import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ChefCompItem.css';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ChefCompItem = ({ item }) => {
  return (
    <div
      className="chefCompItem"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <span>
        <FontAwesomeIcon
          icon={faFacebookF}
          className="chefCompItem__icon chefCompItem__facebook"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="chefCompItem__icon chefCompItem__linkedin"
        />
      </span>
      <p className="chefCompItem__name">{item.name}</p>
    </div>
  );
};

export default ChefCompItem;
