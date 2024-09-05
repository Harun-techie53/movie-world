import React from "react";
import { GoPlus } from "react-icons/go";
import EditMovieCard from "./EditMovieCard";

const MyAddedMoviesSection = ({ handleCreateMovieModalOpen }) => {
  return (
    <div className="space-y-6">
      <div className="font-bold text-3xl flex items-center justify-center space-x-2">
        <p className="text-blue-600">MY ADDED</p>
        <p className="text-yellow-500">MOVIES</p>
      </div>
      <div className="flex items-start space-x-8">
        <EditMovieCard />
        <div className="bg-gray-800 w-[250px] h-[350px] rounded-box flex items-center justify-center border border-white border-dashed">
          <button
            onClick={handleCreateMovieModalOpen}
            className="btn focus:outline-none rounded-full w-[80%] bg-gradient-to-r from-blue-600 to-blue-900 text-white"
          >
            <GoPlus size={22} />
            ADD MOVIE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAddedMoviesSection;
