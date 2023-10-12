import { Route, Router } from "react-router";
import Dallas from "../../pages/Dallas";
import Coppel from "../../pages/Coppel";
import Losangeles from "../../pages/LosAngeles";

function NavRoutes() {
  <>
    <Router>
      <Route path="/" element={<Dallas />} />
      <Route path="/coppel" element={<Coppel />} />
      <Route path="/losangeles" element={<Losangeles />} />
    </Router>
  </>;
}

export default NavRoutes;
