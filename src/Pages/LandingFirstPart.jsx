import React from "react";

const LandingFirstPart = () => {
  return (
    <div className="md:py-14 bg-base-theme">
          <div className="flex flex-col space-y-5 text-left py-10">
            <p className="font-bold font-headlines md:text-6xl text-5xl p-5 md:p-10 lg:p-0">
              Decentralized <br /> Perpetual Exchange
            </p>
            <p className="text-lg tracking-wide font-paragaraph px-5 py-3 md:px-0 text-custom-gray-text font-semibold">
              Trade BTC, ETH, AVAX and other top <br /> cryptocurrencies with up to 30x
              leverage <br /> directly from your wallet
            </p>
            <div>
              <a
                className="inline-block rounded bg-custom-green text-sm px-5 py-2 mt-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400 ml-5 md:ml-0"
                href="/download"
              >
                Launch Exchange
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-16 py-10">
            <div className="flex items-center space-x-7 px-6 py-7 border border-custom-gray-footer-icon rounded border-opacity-30 bg-custom-card-color custom-drop-shadow">
              <div className="basis-1/4 h-12 w-12">
                <img
                  className="h-full w-full"
                  src="../../updownBig.svg"
                  alt=""
                />
              </div>
              <div className="basis-3/4">
                <p className="text-sm text-custom-gray-text py-1">Total Trading Volume</p>
                <p className="text-3xl">$0</p>
              </div>
            </div>
            <div className="flex items-center space-x-7 px-6 py-7 border border-custom-gray-footer-icon rounded border-opacity-30 bg-custom-card-color custom-drop-shadow">
              <div className="basis-1/4 h-12 w-12">
                <img
                  className="h-full w-full"
                  src="../../stocks.svg"
                  alt=""
                />
              </div>
              <div className="basis-3/4">
                <p className="text-sm text-custom-gray-text py-1">Open Interest</p>
                <p className="text-3xl">$0</p>
              </div>
            </div>
            <div className="flex items-center space-x-7 px-6 py-7 border border-custom-gray-footer-icon rounded border-opacity-30 bg-custom-card-color custom-drop-shadow">
              <div className="basis-1/4 h-12 w-12">
                <img
                  className="h-full w-full"
                  src="../../people.svg"
                  alt=""
                />
              </div>
              <div className="basis-3/4">
                <p className="text-sm text-custom-gray-text py-1">Total Users</p>
                <p className="text-3xl">0</p>
              </div>
            </div>
          </div>
        
    </div>
  );
};

export default LandingFirstPart;
