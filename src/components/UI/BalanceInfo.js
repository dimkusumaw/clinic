import React from "react";
import H1 from "./H1";
import H5 from "./H5";

function BalanceInfo(props) {
  return (
    <div className="flex flex-col">
      <H5 value="Total Balance" />
      <div className="flex flex-row">
        <div className="flex items-center w-1/2">
          <H1 value="1.82937456" className="font-semibold mr-4" />
          <span className="bg-[#5CC5F7] text-black p-1 pl-3 pr-3 rounded font-semibold">
            BTC
          </span>
        </div>
        <div className="bg-[#121317] rounded-lg w-1/2">
          <ul className="flex flex-row justify-between">
            <li className="m-2 bg-black pl-2 pr-2 p-1 rounded-lg">Portfolio</li>
            <li className="m-2 pl-2 pr-2 p-1 rounded-lg">Funding</li>
            <li className="m-2 pl-2 pr-2 p-1 rounded-lg">Assets</li>
            <li className="m-2 pl-2 pr-2 p-1 rounded-lg">P2P</li>
          </ul>
        </div>
      </div>
      <H5 value="$20,974.23 " />
    </div>
  );
}

export default BalanceInfo;
