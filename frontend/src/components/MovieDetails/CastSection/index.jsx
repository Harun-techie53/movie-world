import React from "react";
import { IoChevronForward } from "react-icons/io5";
import CastCard from "./CastCard";

const CastSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="font-bold text-3xl flex items-center space-x-2">
          <p className="text-white">TOP</p>
          <p className="text-blue-500">CAST</p>
        </div>
        <div className="bg-white p-2 rounded-lg">
          <IoChevronForward size={20} color="blue" />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-flow-row gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <CastCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default CastSection;
