import React from "react";

const Footer = () => {
  return (
    <div className="OfficeFooter">
      <div className="row-icons">
        <ul>
          <li>
            <i class="fa-solid fa-virus"></i>
          </li>
          <li>
            <i class="fa-regular fa-face-smile"></i>
          </li>
          <li>
            <i class="fa-solid fa-syringe"></i>
          </li>
          <li>
            <i class="fa-solid fa-mask-face"></i>
          </li>
        </ul>
      </div>
      <div className="row-title">
        <ul>
          <li>
            <p>Estimated office infection rate:</p> <span className="green">0.3% (low)</span>
          </li>
          <li>
            <p>Employee satisfaction rate:</p> <span className="green">65% (high)</span>
          </li>
          <li>
            <p>Estimated office vaccination rate:</p> <span className="blue">10%</span>
          </li>
          <li>
            <p>Mask compliance:</p> <span className="blue">No</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
