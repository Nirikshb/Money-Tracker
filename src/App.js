// Take Home Assignment

// 1. Write reducer for UPDATE_EXPENSE action.
// 2. Make Month and Year filters functional.
// 3. Add options in Navbar to move through the application
// 4. Handle wrong credentials login error message
// 5. Create Reset Filters button

import React from "react";

import Login from "./components/Login/Login";

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
      Home Page
      <Login />
    </div>
  );
};

export default App;
