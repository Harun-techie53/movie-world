import React from "react";
import Titlebar from "../shared/Titlebar";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full pt-10 pb-10 bottom-0">
      <div className="flex items-start justify-between w-full px-[10%]">
        <div className="space-y-4 w-full">
          <h4 className="font-bold text-white text-xl pb-4">UPCOMING MOVIES</h4>
          <ul className="space-y-3">
            <li>JAWAN</li>
            <li>The Vampire Diaries</li>
            <li>Barbie</li>
            <li>Teen All</li>
            <li>NCIS</li>
          </ul>
        </div>
        <div className="space-y-4 w-full">
          <h4 className="font-bold text-white text-xl pb-4">
            Additional Pages
          </h4>
          <ul className="space-y-3">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start space-y-4 w-full">
          <Titlebar />
          <p className="w-[60%] tracking-wide text-wrap">
            2021 movieworld.com. All Rights Reserved. This site is not
            affiliated or owned by the listed movie streaming platform owners.
          </p>
          <div className="flex items-center space-x-6">
            <button className="btn btn-circle btn-primary bg-blue-600 btn-sm">
              <FaFacebookF color="white" size={14} />
            </button>
            <button className="btn btn-circle btn-primary bg-blue-600 btn-sm">
              <FaTwitter color="white" size={14} />
            </button>
            <button className="btn btn-circle btn-primary bg-blue-600 btn-sm">
              <FaLinkedinIn color="white" size={14} />
            </button>
          </div>
        </div>
      </div>
        <div className="border border-gray-500 m-10 opacity-20"></div>
        <div className="text-center">
          <p className="tracking-wide">Copyright 2023 movieworld ALL Right Reserved</p>
        </div>
    </div>
  );
};

export default Footer;
