import React from "react";
import { moviesImages } from "../../../../dev-data/images";

const EditMovieCard = () => {
  return (
    <div className="relative w-[250px]">
      <img
        src={moviesImages[0].path}
        className="rounded-box w-[250px] h-[350px] object-fill opacity-50 relative"
      />
      <button className="btn focus:outline-none rounded-full absolute top-2 right-1 text-white bg-gradient-to-r from-blue-600 to-blue-900">
        EDIT MOVIE
      </button>
    </div>
  );
};

export default EditMovieCard;
