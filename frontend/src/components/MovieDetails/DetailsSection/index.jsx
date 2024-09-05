import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const DetailsSection = ({ movie }) => {
  return (
    <div className="flex items-start w-full space-x-28">
      <div className="flex flex-col items-start space-y-3">
        <div className="flex items-center font-semibold text-xl space-x-3">
          <p className="text-white tracking-wider">EPISODES</p>
          <p className="text-yellow-500">{movie?.episodes_no}</p>
        </div>
        <div className="flex items-center font-semibold text-xl space-x-3">
          <p className="text-white tracking-wider">VIDEOS</p>
          <p className="text-yellow-500">{movie?.videos_no}</p>
        </div>
      </div>
      <div className="w-full border-l text-white border-blue-900 pl-10 space-y-3">
        <p className="tracking-wide text-lg">{movie?.description}</p>
        <div className="flex items-center space-x-2">
          <p className="text-blue-600 font-bold">Creators:</p>
          <p>{movie?.director}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-blue-600 font-bold">Stars:</p>
          <p>{movie?.starrers}</p>
        </div>
        <div className="flex items-center space-x-2">
          <AiFillStar size={20} color={"#FFD700"} />
          <div className="flex items-center">
            <p className="font-bold">{movie?.rating}</p>
            <p>(407)</p>
          </div>
          {movie?.rated ? (
            <AiFillStar size={20} color={"#0096FF"} />
          ) : (
            <AiOutlineStar size={20} color={"#0096FF"} />
          )}
          <p>Rate Now</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
