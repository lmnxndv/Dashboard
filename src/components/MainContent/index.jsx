import React from "react";
import AppRoutes from "../Routes";
import NavRoutes from "../NavRoutes";

const MainContent = () => {
  return (
    <div className="MainContent">
      <AppRoutes />
      <NavRoutes />
    </div>
  );
};

export default MainContent;
