import React from "react";
import H2 from "./H2";
import H3 from "./H3";

function CardAsset(props) {
  const className = `bg-gradient-to-r ${props.gradient} flex flex-col text-black p-5 rounded-lg mt-4`;
  
  return (
    <div className={className}>
      <div className="flex flex-col items-start">
        <img src={props.image} alt="" className="w-14 -ml-2" />
        <H3 value={props.name} className="font-semibold" />
      </div>
      <div className="flex justify-between items-center">
        <H2 value={props.cvalue} className="font-bold" />
        <span className="font-bold">{props.abv}</span>
      </div>
    </div>
  );
}

export default CardAsset;
