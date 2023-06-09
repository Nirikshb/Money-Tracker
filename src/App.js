// 1. Write reducer for UPDATE_EXPENSE action.
// 2. Make Month and Year filters functional.
// 3. Add options in Navbar to move through the application
// 4. Handle wrong credentials login error message
// 5. Create Reset Filters button

import React from "react";
import { PATHS } from "./path";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import PrivateRoutes from "./components/routes/PrivateRoutes";
import RestrictedRoutes from "./components/routes/RestrictedRoutes";


export const centeredStyle = {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  background: "dodgerblue",
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoutes /> }>
        <Route path={PATHS.ADD_Expense} element={<Add_EXPENSE />} />
        <Route path={PATHS.MANAGE_EXPENSE} element={<MANAGE_EXPENSE />} />
        </Route>
    
        <Route path="/" element={ <RestrictedRoutes />} >
          <Route path={PATHS.LOGIN} element={<Login />} />
        </Route>
      
      </Routes>
    </div>
  );
};

export default App;
