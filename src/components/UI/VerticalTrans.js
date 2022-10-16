import React from "react";
import H2 from "./H2";
import Vtranslist from "./Vtranslist";
import btc from "../../assets/images/btc.png";
import eth from "../../assets/images/eth.png";
import polkadot from "../../assets/images/polkadot.png";
import eos from "../../assets/images/eos.png";
import cardano from "../../assets/images/cardano.png";
import CardAsset from "./CardAsset";
import btc2 from "../../assets/images/btc2.png";
import eth2 from "../../assets/images/eth2.png";

function VerticalTrans(props) {
  const btcGradient = "from-[#F495FB] via-[#B8479F] to-[#7A9EEF]"
  const ethGradient = "from-[#00F4F4] via-[#1AC9EF] to-[#7A9EEF]"

  return (
    <div className="w-1/3 ml-10">
      <div>
        <H2 value="Recent Transaction" />
        <Vtranslist
          image={btc}
          crypto="Bitcoin"
          status="Buy"
          mvalue="$5,642"
          time="Today, 15:20 PM"
        />
        <Vtranslist
          image={eth}
          crypto="Ethereum"
          status="Received"
          mvalue="$5,642"
          time="Today, 10:20 AM"
        />
        <Vtranslist
          image={polkadot}
          crypto="Polkadot"
          status="Buy"
          mvalue="$5,642"
          time="Today, 9:20 AM"
        />
        <Vtranslist
          image={eos}
          crypto="EOS"
          status="Buy"
          mvalue="$5,642"
          time="Today, 15:20 PM"
        />
        <Vtranslist
          image={cardano}
          crypto="Cardano"
          status="Received"
          mvalue="$5,642"
          time="Yesterday, 17:20 PM"
        />
      </div>
      <div className="mt-10">
        <H2 value="Assets" />
        <CardAsset
          image={btc2}
          name="Bitcoin"
          cvalue="234,542,326"
          abv="BTC"
          gradient={btcGradient}
        />
        <CardAsset
          image={eth2}
          name="Ethereum"
          cvalue="24,542,326"
          abv="ETH"
          gradient={ethGradient}
        />
      </div>
    </div>
  );
}

export default VerticalTrans;
