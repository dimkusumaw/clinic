import React from "react";

function Card(props) {
  const className = `bg-white rounded shadow-2xl ${props.className}`;
  return <div className={className}>{props.children}</div>;
}

export default Card;
