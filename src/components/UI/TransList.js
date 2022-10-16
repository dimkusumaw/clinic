import React from "react";
import H4 from "./H4";

function TransList(props) {
  return (
    <div className="bg-[#121317] flex flex-row p-3 mt-4 rounded-2xl">
      <div className="w-1/5 flex flex-row items-center">
        <img src={props.image} alt="img" className="w-10 h-10 mr-5" />
        <div className="flex flex-col w-full">
          <H4 value={props.crypto} />
          <span className="text-gray-500">{props.abv}</span>
        </div>
      </div>
      <div className="w-1/5">
        <H4 value={props.market} />
        <span className={props.color}>{props.mvalue}</span>
      </div>
      <div className="w-1/5">
        <H4 value={props.time} />
        <span className="text-green-700">{props.percentage}</span>
      </div>
      <div className="w-1/5 flex items-center justify-center">
        <img src={props.image2} alt="img2" className="w-full"/>
      </div>
      <div className="w-1/5 flex items-center justify-center">
        <button type="button" className="p-1 pr-3 pl-3 bg-black rounded-2xl">Trade</button>
      </div>
    </div>
  );
}

export default TransList;
