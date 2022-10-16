import React from 'react';

function H2(props) {
  const className = `text-2xl ${props.className}`;
  return <h2 className={className}>{props.value}</h2>;
}

export default H2;