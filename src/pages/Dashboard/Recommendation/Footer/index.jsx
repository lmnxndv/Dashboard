import React from "react";
import { Slider } from "antd";

const Footer = () => {
  const formatter = (value) => `${value}%`;
  return (
    <div className="Footer">
      <h4>
        Maximum recommended occupancy for vaccination rate and mask compliance
        rate:
      </h4>
      <div className="text">
        <span>Employees vaccinated:</span>
        <span>38% (34 people)</span>
      </div>
      <Slider
        tooltip={{
          formatter,
        }}
      />
      <p className="color">Current vaccination rate:10%(9 people)</p>
      <div className="text">
        <span>Employees vaccinated:</span>
        <span>38% (34 people)</span>
      </div>
      <Slider
        tooltip={{
          formatter: null,
        }}
      />
      <div className="footer-text">
        <h5>
          Current recommended occupancy would be{" "}
          <strong>47% (45 people)</strong> if your vaccination rate was{" "}
          <strong>38%</strong> and your mask compliance rate was{" "}
          <strong>30%</strong>
        </h5>
      </div>
    </div>
  );
};

export default Footer;
