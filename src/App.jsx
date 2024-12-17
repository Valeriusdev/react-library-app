import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";

const App = () => {
  return (
    <BrowserRouter>
      <HomeLayout />;
    </BrowserRouter>
  );
};

export default App;
