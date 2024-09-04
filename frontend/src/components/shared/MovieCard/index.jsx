import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { IoPlayCircleOutline } from "react-icons/io5";

const MovieCard = ({ title, imagePath }) => {
  return (
    <div className="w-full sm:w-[90%] lg:w-[70%] rounded-box shadow-md bg-[#50505011] focus:ring-2">
      <div className="w-full">
        <img
          src={imagePath}
          alt={title}
          className="w-full object-fill h-[250px] rounded-t-box"
        />
      </div>
      <div className="flex flex-col items-start space-y-4 p-4">
        <p className="font-bold text-lg">
          {title.toUpperCase()}
        </p>
        <div className="flex items-center space-x-2">
          <AiFillStar size={20} color={"#FFD700"} />
          <div className="flex items-center">
            <p className="font-bold">8</p>
            <p>(407)</p>
          </div>
          <AiOutlineStar size={20} color={"#0096FF"} />
        </div>
        <button className="w-full btn btn-circle text-white bg-gradient-to-r from-[#306ead] to-blue-950">
          <GoPlus size={22} />
          <p className="tracking-wider">WATCH LIST</p>
        </button>
        <div className="flex items-center space-x-1">
          <IoPlayCircleOutline size={20} />
          <p className="font-bold text-sm text-white">TRAILER</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
