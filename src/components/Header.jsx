import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="h-[40vh] bg-gray-800 text-white relative">
      <Menu className="absolute top-4 right-4" />
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-5xl text-center">Header</h1>
      </div>
    </header>
  );
};

export default Header;
