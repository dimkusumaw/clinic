import React from "react";
import H4 from "./H4";

function Vtranslist(props) {
  return (
    <div className="flex justify-between p-3 mt-4 rounded-2xl">
      <div className="w-1/2 flex flex-row items-center">
        <img src={props.image} alt="img" className="w-10 h-10 mr-5" />
        <div className="flex flex-col w-full">
          <H4 value={props.crypto} />
          <span className="text-gray-500">{props.status}</span>
        </div>
      </div>
      <div className="w-1/2 flex flex-col text-right">
        <H4 value={props.mvalue} />
        <span className="text-gray-500">{props.time}</span>
      </div>
    </div>
  );
}

export default Vtranslist;
