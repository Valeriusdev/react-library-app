import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import BooksLayout from "./layout/BooksLayout";
import SingleBookLayout from "./layout/SingleBookLayout";
import AboutLayout from "./layout/AboutLayout";
import ContactsLayout from "./layout/ContactsLayout";
import NotFoundLayout from "./layout/NotFoundLayout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/books" element={<BooksLayout />} />
          <Route path="/books/:slug" element={<SingleBookLayout />} />
          <Route path="/about" element={<AboutLayout />} />
          <Route path="/contacts" element={<ContactsLayout />} />
          <Route path="*" element={<NotFoundLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
