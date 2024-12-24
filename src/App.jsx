import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import AboutLayout from "./layout/AboutLayout";
import ContactsLayout from "./layout/ContactsLayout";
import NotFoundLayout from "./layout/NotFoundLayout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/about" element={<AboutLayout />} />
          <Route path="/contacts" element={<ContactsLayout />} />
          <Route path="*" element={<NotFoundLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
