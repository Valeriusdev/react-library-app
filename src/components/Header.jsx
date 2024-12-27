import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="h-[40vh] bg-gray-800 text-white flex items-center justify-center">
      <div className="w-full">
        <h1 className="text-5xl text-center">Header</h1>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
