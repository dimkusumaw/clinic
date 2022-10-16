import React from "react";
import BalanceInfo from "../components/UI/BalanceInfo";
import Chart from "../components/UI/Chart";
import HorizontalTrans from "../components/UI/HorizontalTrans";
import VerticalTrans from "../components/UI/VerticalTrans";

function Dashboard(props) {
  return (
    <div className="flex flex-row m-4">
      <div className="w-2/3 flex flex-col">
        <BalanceInfo />
        <Chart />
        <HorizontalTrans/>
      </div>
      <VerticalTrans />
    </div>
  );
}

export default Dashboard;
