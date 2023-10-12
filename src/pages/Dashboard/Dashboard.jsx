import React from "react";
import './style.css'
import Recommendation from "./Recommendation/Recommendation";
import OfficeDetails from "./OfficeDetails/OfficeDetails";


const Dashboard = () => {
  return <div className="dashboard">
    <Recommendation/>
    <OfficeDetails/>
  </div>;
};

export default Dashboard;
