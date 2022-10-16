import React from 'react';

function H4(props) {
  const className = `${props.className}`;
  return <h3 className={className}>{props.value}</h3>;
}

export default H4;