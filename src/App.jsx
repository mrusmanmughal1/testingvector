import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import "./Style/Animations.css";
import Callback from "./Components/Callback";
import AdminProtected from "./Components/AdminProtect";
import Admin from "./Components/Admin";
import Dashboard from "./Components/Dashboard";
import LevelIncomeDetails from "./Pages/LevelIncomeDetails";
import InDirectIncomeDetails from "./Pages/InDirectIncomeDetails";
import SuccessIncome from "./Pages/SuccessIncome";
import IntervalIncome from "./Pages/IntervalIncome";
import VectorExchange from "./Pages/VectorExchange";

const App = () => {

  
  return (
    <div>
       
      <Routes>
        {/* Dashboard Routes  */}
        <Route
          path="admin"
          element={
            <AdminProtected>
              <Admin />
            </AdminProtected>
          }
        >
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="level-income" index element={<LevelIncomeDetails />} />
          <Route
            path="indirect-income"
            index
            element={<InDirectIncomeDetails />}
          />
          <Route path="success-income" index element={<SuccessIncome />} />
          <Route path="interval-income" index element={<IntervalIncome />} />
          <Route path="Vector-Exchange" index element={<VectorExchange />} />
          VectorExchange
        </Route>

        {/* public routes  */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
