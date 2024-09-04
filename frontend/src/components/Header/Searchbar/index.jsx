import React from "react";

const Searchbar = () => {
  return (
    <>
      <label className="input input-bordered input-primary rounded-xl flex items-center gap-2 bg-white w-full md:w-1/3 p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6 opacity-70 ml-2"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="text" className="grow" placeholder="Search Movies" />
        <select className="select select-sm mr-2 bg-gray-300 text-slate-700 select-bordered">
          <option disabled selected>
            All
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </label>
    </>
  );
};

export default Searchbar;
