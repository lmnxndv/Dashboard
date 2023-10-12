import { Route, Routes } from "react-router";
import Forecast from "../../pages/Forecast";
import AllOffices from "../../pages/AllOffices";
import Employees from "../../pages/Employees";
import Dashboard from "../../pages/Dashboard/Dashboard";

function AppRoutes() {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/forecast" element={<Forecast/>}/>
        <Route path="/alloffices" element={<AllOffices/>}/>
        <Route path="/employees" element={<Employees/>}/>
      </Routes>
    </div>
  );
}
export default AppRoutes;

