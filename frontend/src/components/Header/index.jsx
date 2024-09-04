import React from "react";
import Searchbar from "./Searchbar";
import Titlebar from "../shared/Titlebar";

const Header = () => {
  return (
    <div className="py-5 flex flex-col items-start space-y-3 md:flex-row md:items-center md:justify-center w-full space-x-10 fixed top-0 overflow-hidden z-30 bg-gradient-to-r from-[#0f2235] to-black">
      <Titlebar />
      <Searchbar />
      <div className="flex items-center space-x-4">
        <div>
          <p className="text-white">Get Pro</p>
        </div>
        <div>
          <p className="text-white">Movies</p>
        </div>
        <div>
          <p className="text-white">Watch-list</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
