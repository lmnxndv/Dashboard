import React from "react";
import { Progress } from "antd";

const Header = () => {
  return (
    <div className="Header">
      <div className="row">
        <h2>Forecast & recommendation</h2>
        <div className="recom-people">
          <h6>Currently recommended occupancy:</h6>
          <span>39%</span>
          <Progress percent={39} showInfo={false} />
        </div>
      </div>
    </div>
  );
};

export default Header;
