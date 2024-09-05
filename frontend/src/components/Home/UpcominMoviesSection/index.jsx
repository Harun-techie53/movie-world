import React from "react";
import { moviesImages } from "../../../dev-data/images";

const UpcomingMoviesSection = ({ movies }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <div className="font-bold text-3xl flex items-center space-x-2">
          <p className="text-blue-600">UPCOMING</p>
          <p className="text-yellow-500">MOVIES</p>
        </div>
        <div className="text-sm tracking-wide">
          <p>We constantly offers new movies</p>
        </div>
      </div>
      <div className="carousel carousel-center rounded-box w-full space-x-10 p-4">
        {movies.map((movie) => (
          <div className="carousel-item relative group" key={movie?._id}>
            <img
              src={movie?.image_poster}
              className="rounded-box w-[250px] h-[350px] object-fill relative"
            />
            <div className="absolute py-3 w-full backdrop-filter backdrop-blur-sm rounded-b-box text-center bottom-0 hidden group-hover:block">
              <p className="font-bold text-lg text-white tracking-wider hover:text-[#ccc] cursor-pointer">
                {movie?.title?.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMoviesSection;
