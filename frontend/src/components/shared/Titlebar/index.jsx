import React from "react";
import { Link } from "react-router-dom";

const Titlebar = () => {
  return (
    <Link to={'/'} className="flex flex-col items-end">
      <p className="font-bold text-xl text-blue-500">MOVIE</p>
      <p className="text-white">World</p>
    </Link>
  );
};

export default Titlebar;
