import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const DetailsSection = () => {
  return (
    <div className="flex items-start w-full space-x-28">
      <div className="flex flex-col items-start space-y-3">
        <div className="flex items-center font-semibold text-xl space-x-3">
          <p className="text-white tracking-wider">EPISODES</p>
          <p className="text-yellow-500">121</p>
        </div>
        <div className="flex items-center font-semibold text-xl space-x-3">
          <p className="text-white tracking-wider">VIDEOS</p>
          <p className="text-yellow-500">121</p>
        </div>
        <div className="flex items-center font-semibold text-xl space-x-3">
          <p className="text-white tracking-wider">EPISODES</p>
          <p className="text-yellow-500">121</p>
        </div>
      </div>
      <div className="w-full border-l text-white border-blue-900 pl-10 space-y-3">
        <p className="tracking-wide text-lg">
          The Lives, Loves, Dangers and Disasters in the town, Mystic Falls,
          Virginia. Creatures of Unspeakable horror lurk beneath this town as a
          teenage girl is suddenly torn between two vampires brothers.
        </p>
        <div className="flex items-center space-x-2">
          <p className="text-blue-600 font-bold">Creators:</p>
          <p>Julie Pleckvein Willamson</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-blue-600 font-bold">Stars:</p>
          <p>Nina Dovrev, Paul Wesleylan, Somerhalder</p>
        </div>
        <div className="flex items-center space-x-2">
          <AiFillStar size={20} color={"#FFD700"} />
          <div className="flex items-center">
            <p className="font-bold">8</p>
            <p>(407)</p>
          </div>
          <AiOutlineStar size={20} color={"#0096FF"} />
          <p>Rate Now</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
