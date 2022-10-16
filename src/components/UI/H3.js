import React from 'react';

function H3(props) {
  const className = `text-lg ${props.className}`;
  
  return <h3 className={className}>{props.value}</h3>;
}

export default H3;