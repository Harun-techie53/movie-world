import React from "react";

const CastCard = () => {
  return (
    <div className="bg-[#50505011] rounded-box p-5 flex items-start space-x-4">
      <img src="/images/user.jpg" className="rounded-full w-16 h-16" />
      <div className="text-white space-y-2">
        <p className="text-lg font-semibold tracking-wide">Inaki Godoy</p>
        <p>Monkey D LUffy</p>
        <p className="text-sm">9 Episodes, 2023</p>
      </div>
    </div>
  );
};

export default CastCard;
