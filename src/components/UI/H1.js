import React from 'react';

function H1(props) {
  const className = `text-3xl ${props.className}`;
  return <h5 className={className}>{props.value}</h5>;
}

export default H1;