import React from 'react';
import './styles.css';

const SayHello = (props) => {
  return (
    <div className="greeting">Hello {props.name} !</div>
  )
};

export default SayHello;
