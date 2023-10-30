import React from "react";

const LandingSceondPart = () => {
  return (
    <div className="md:py-14 gap-y-10 bg-base-theme border-t-2 border-custom-gray-line">
      <div
        id="UpperPart"
        className="grid sm:grid-cols-1 md:grid-cols-3 gap-16 py-10 my-10"
      >
        <div id="card" className="p-10 md:p-5 lg:p-0">
          <div className="flex space-x-4 items-center">
            <div>
              <img src="../../drop.svg" alt="" />
            </div>
            <p className="text-white text-lg">Reduce Liquidation Risks</p>
          </div>
          <div>
            <p className="text-custom-gray-text text-base py-3">
              An aggregate of high-quality price feeds determine when
              liquidations occur. This keeps positions safe from temporary
              wicks.
            </p>
          </div>
        </div>
        <div id="card" className="p-10 md:p-5 lg:p-0">
          <div className="flex space-x-4 items-center">
            <div>
              <img src="../../flow.svg" alt="" />
            </div>
            <p className="text-white text-lg">Save on Costs</p>
          </div>
          <div>
            <p className="text-custom-gray-text text-base py-3">
              Enter and exit positions with minimal spread and zero price
              impact. Get the optimal price without incurring additional costs..
            </p>
          </div>
        </div>
        <div id="card" className="p-10 md:p-5 lg:p-0">
          <div className="flex space-x-4 items-center">
            <div>
              <img src="../../updown.svg" alt="" />
            </div>
            <p className="text-white text-lg">Simple Swaps</p>
          </div>
          <div>
            <p className="text-custom-gray-text text-base py-3">
              Open positions through a simple swap interface. Conveniently swap
              from any supported asset into the position of your choice.
            </p>
          </div>
        </div>
      </div>
      <div id="LowerPart" className="py-5">
        <div className="pb-6">
          <p className="font-headlines text-white text-left text-4xl font-semibold p-5 md:p-10 lg:p-0">
            Two tokens create <br /> our ecosystem
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-4 py-4">
          <div
            id="card"
            className="p-5 border border-custom-gray-footer-icon rounded border-opacity-70 bg-custom-token-bg custom-drop-shadow"
          >
            <div className="flex space-x-4 items-center">
              <div className="h-10 w-10">
                <img
                  className="w-full h-full object-cover"
                  src="../../download.png"
                  alt=""
                />
              </div>
              <p className="text-custom-white-text text-xl">$ROMI</p>
            </div>
            <div>
              <p className="text-custom-white-text text-base py-3">
                $ROMI is the utility and governance token. Accrues 30% of the
                platform's generated fees.
              </p>
              <p className="text-custom-gray-text text-base pb-4">
                Ethereum APR: 0.00%
              </p>
              <div className="flex space-x-5">
                <a
                  className="inline-block rounded bg-custom-green text-sm px-5 py-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400"
                  href="/download"
                >
                  Buy
                </a>
                <a
                  className="inline-block rounded bg-transparent text-sm px-5 py-2 text-white transition hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring border border-white"
                  href="/download"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div
            id="card"
            className="p-5 border border-custom-gray-footer-icon rounded border-opacity-70 bg-custom-token-bg custom-drop-shadow"
          >
            <div className="flex space-x-4 items-center">
              <div className="h-10 w-10">
                <img
                  className="w-full h-full object-cover"
                  src="../../download (1).png"
                  alt=""
                />
              </div>
              <p className="text-custom-white-text text-xl">$ZLP</p>
            </div>
            <div>
              <p className="text-custom-white-text text-base py-3">
                $ZLP is the liquidity provider token. Accrues 70% of the
                platform's generated fees..
              </p>
              <p className="text-custom-gray-text text-base pb-4">
                Ethereum APR: 1,654,402,669.21%
              </p>
              <div className="flex space-x-5">
                <a
                  className="inline-block rounded bg-custom-green text-sm px-5 py-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400"
                  href="/download"
                >
                  Buy
                </a>
                <a
                  className="inline-block rounded bg-transparent text-sm px-5 py-2 text-white transition  hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring border border-white"
                  href="/download"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSceondPart;
