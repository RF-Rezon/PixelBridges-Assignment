import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaMedium,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t-2 border-custom-gray-line bg-custom-token-bg min-h-48 py-10">
      <div className="flex items-center justify-center h-full w-1/2 mx-auto">
        <div className="flex items-center flex-col space-y-5 ">
          <div>
            <div className="flex items-center">
              <div className="h-10 w-10">
                <img
                  className="h-full w-full object-cover cursor-pointer"
                  src="../../New Logo.png"
                  alt=""
                />
              </div>
              <a href="#" className="font-logoText cursor-pointer">Romi.Finance</a>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-12">
            <a href="https://twitter.com" target="_blank">
              <FaTwitter
                fill="#797983"
                className="hover:fill-white transition-all 0.5s ease h-8 w-8"
              />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaMedium
                fill="#797983"
                className="hover:fill-white transition-all 0.5s ease h-8 w-8"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub
                fill="#797983"
                className="hover:fill-white transition-all 0.5s ease h-8 w-8"
              />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTelegram
                fill="#797983"
                className="hover:fill-white transition-all 0.5s ease h-8 w-8"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaDiscord
                fill="#797983"
                className="hover:fill-white transition-all 0.5s ease h-8 w-8"
              />
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between space-x-6 space-y-5 md:space-y-0">
            <a href="#">
              <p className="text-white text-sm font-medium text-opacity-80 hover:text-opacity-100 hover:text-white transition-all 0.5s ease font-paragaraph">
                Terms and Conditions
              </p>
            </a>
            <a href="#">
              <p className="text-white text-sm font-medium text-opacity-80 hover:text-opacity-100 hover:text-white transition-all 0.5s ease font-paragaraph">
                Referral Terms
              </p>
            </a>
            <a href="#">
              <p className="text-white text-sm font-medium text-opacity-80 hover:text-opacity-100 hover:text-white transition-all 0.5s ease font-paragaraph">
                Media Kit
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
