import React from 'react';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined';

import './Service.css';

const Services = () => {
  const serviceData = [
    {
      title: 'AMBIENCE',
      detail:
        'The Bistro has a warm, friendly set up, in very peaceful surroundings.',
      icon: DirectionsBikeIcon,
    },
    {
      title: 'DELIVERY 24/7',
      detail: 'With the Bistro Café, we are open 7 days a week for you.',
      icon: LocalShippingOutlinedIcon,
    },
    {
      title: 'FRESH INGREDIENTS',
      detail: 'Premium food and coffee made with the freshest ingredients',
      icon: LocalDiningIcon,
    },
    {
      title: 'PROFESSIONAL BARTENDER',
      detail: 'We strive to offer nothing but the best in customer service.',
      icon: EmojiFoodBeverageOutlinedIcon,
    },
  ];
  return (
    <>
      <h2 className="home-header font-primary">
        About Our<span className="text-primary"> Service</span>
      </h2>
      <div className="service">
        <div className="service__container">
          {serviceData.map((item) => (
            <ServiceItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

const ServiceItem = ({ item }) => {
  return (
    <div className="service__item">
      <item.icon className="service__icon" />
      <h4 className="service__title">{item.title}</h4>
      <p className="">{item.detail}</p>
    </div>
  );
};
