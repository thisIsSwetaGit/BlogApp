import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-800  text-white py-4">
      <div
        className="flex flex-col md:flex-row items-start justify-between gap-10
      py-10 border-b border-gray-500 text-gray-400"
      >
        <div>
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            BlogApp is a platform where you can find the latest blogs on various
            topics.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-between w-full md:w-[45%]">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base  text-gray-900 md:mb-5 mb-2">{section.title}</h3>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="a">{link}</a>
                  </li>
                ))}{" "}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-sm py-4 md:text-base text-gray-500">
        Copyright © 2025 BlogApp. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
