import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-white items-center text-center py-5">
      <h1 className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        HERO.IO
      </h1>

      <div className="py-3 border-b-1 border-gray-300">
        <ul className="flex space-x-6 items-center text-center justify-center text-xl">
          <li className="font-semibold">Home</li>
          <li className="font-semibold">About us</li>
          <li className="font-semibold">Apps</li>
          <li className="font-semibold">Installation</li>
        </ul>
        <ul className="flex space-x-6 items-center text-center justify-center text-xl mt-3 px-2">
          <li className="font-semibold">Contact</li>
          <li className="font-semibold">Help</li>
          <li className="font-semibold">Terms of use</li>
          <li className="font-semibold">Privacy policy</li>
        </ul>
        <div className="flex space-x-6 items-center text-center justify-center py-6">
          <span className="text-3xl">
            <FaTwitterSquare />
          </span>
          <span className="text-3xl">
            <TiSocialInstagram />
          </span>
          <span className="text-3xl">
            <TiSocialFacebook />
          </span>
          <span className="text-3xl">
            <TiSocialLinkedin />
          </span>
        </div>
      </div>

      <p className="mt-5">
        Copyright © {new Date().getFullYear()} - All right reserved by HERO.OI
        Ltd
      </p>
    </div>
  );
};

export default Footer;
