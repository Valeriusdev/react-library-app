import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import AboutLayout from "./layout/AboutLayout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/about" element={<AboutLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
