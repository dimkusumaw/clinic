import React from "react";
import H2 from "./H2";
import TransList from "./TransList";
import btc from "../../assets/images/btc.png";
import eth from "../../assets/images/eth.png";
import lineRed from "../../assets/images/linered.png";
import lineBlue from "../../assets/images/lineblue.png";

function HorizontalTrans(props) {
  return (
    <div className="mt-5 w-full">
      <H2 value="Recent Transaction" />
      <div className="flex flex-col">
        <TransList
          image={btc}
          crypto="Bitcoin"
          abv="BTC"
          market="Market Cap"
          mvalue="$20,356,211"
          time="30h change"
          percentage="+3.23%"
          color="text-[#D79DDA]"
          image2={lineRed}
        />
        <TransList
          image={eth}
          crypto="Bitcoin"
          abv="ETH"
          market="Market Cap"
          mvalue="$20,356,211"
          time="15h change"
          percentage="+1.15%"
          color="text-[#05EFF4]"
          image2={lineBlue}
        />
      </div>
    </div>
  );
}

export default HorizontalTrans;
