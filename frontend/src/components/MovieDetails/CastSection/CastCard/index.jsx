import React from "react";

const CastCard = ({ cast }) => {
  return (
    <div className="bg-[#50505011] rounded-box p-5 flex items-start space-x-4">
      <img
        src={cast?.avatar || "/images/user.jpg"}
        className="rounded-full w-16 h-16"
      />
      <div className="text-white space-y-2">
        <p className="text-lg font-semibold tracking-wide">{cast?.name}</p>
        <p>{cast?.character_name}</p>
      </div>
    </div>
  );
};

export default CastCard;
