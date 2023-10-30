import React from "react";
import { FaEllipsisVertical, FaWallet } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-base-theme sm:h-28 md:h-16 custom-drop-shadow z-50 border-b-2 border-custom-gray-line">
      <div className="flex h-full py-10 md:py-0 flex-col md:flex-row space-y-4 md:space-y-0 items-center">
        <div className="basis-1/4 my-auto">
          <div className="flex items-center ml-5">
            <div className="h-10 w-10">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src="../../New Logo.png"
                alt=""
              />
            </div>
            <a href="/" className="font-logoText cursor-pointer mr-10 md:mr-0">
              Romi.Finance
            </a>
          </div>
        </div>
        <div className="basis-1/2">
          <ul className="flex space-x-6 h-full items-center justify-center">
            <li className="tracking-wide text-sm font-medium font-body text-gray-500 hover:text-white cursor-pointer transition-all 0.5s ease">
              <a href="/">Home</a>
            </li>
            <li className="tracking-wide text-sm font-medium font-body text-gray-500 hover:text-white cursor-pointer transition-all 0.5s ease">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="tracking-wide text-sm font-medium font-body text-gray-500 hover:text-white cursor-pointer transition-all 0.5s ease">
              <a href="/">NFT</a>
            </li>
            <li className="tracking-wide text-sm font-medium font-body text-gray-500 hover:text-white cursor-pointer transition-all 0.5s ease">
              <a href="/earn">Earn</a>
            </li>
            <li className="tracking-wide text-sm font-medium font-body text-gray-500 hover:text-white cursor-pointer transition-all 0.5s ease">
              <a href="/">Buy</a>
            </li>
            <li className="tracking-wide text-sm font-medium font-body text-gray-500 hover:text-white cursor-pointer transition-all 0.5s ease">
              <a href="/">Referrals</a>
            </li>
            <li className="tracking-wide text-sm font-medium font-body text-gray-500 hover:text-white cursor-pointer transition-all 0.5s ease">
              <a href="/">Ecosystem</a>
            </li>
            <li className="tracking-wide text-sm font-medium font-body text-gray-500 hover:text-white cursor-pointer transition-all 0.5s ease">
              <a href="/">About</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/4 flex justify-end items-center space-x-5 mr-5 pt-2 md:pt-0">
          <a
            className="inline-block rounded bg-custom-green text-sm px-5 py-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400"
            href="/download"
          >
            Trade
          </a>
          <div className="flex items-center justify-evenly text-sm px-5 py-2 border border-custom-gray-line rounded space-x-2 cursor-pointer">
            <FaWallet height={20} width={20} fill="white" />
            <p>
              <span className="pr-1">Connect</span>
              <span className="hidden md:inline">Wallet</span>
            </p>
          </div>
          <div className="flex items-center justify-evenly text-sm px-4 py-2 border border-custom-gray-line rounded space-x-2 divide-x-[1px] divide-custom-gray-footer-icon">
            <div className="h-[20px] w-[20px] cursor-pointer">
              <img
                className="h-full w-full object-cover rounded-full"
                src="../../gray-etherium.svg"
                alt=""
              />
            </div>
            <div className="pl-1">
              <FaEllipsisVertical fill="white" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
