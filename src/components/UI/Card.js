import React from 'react';
import './Card.css';

const Card = ({ children, className }) => {
  // const classes =  className;

  return <div className={className}>{children}</div>;
};

export default Card;
