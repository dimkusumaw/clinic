import React from "react";

function H5(props) {
  const className = `text-sm ${props.className}`;
  return <h5 className={className}>{props.value}</h5>;
}

export default H5;
