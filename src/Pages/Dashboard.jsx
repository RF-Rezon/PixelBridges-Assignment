import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { FaAngleDown } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div>
      <div className="bg-base-theme font-paragaraph py-10">
        <div className="flex space-x-2 items-center">
          <p className="font-headlines text-white text-left text-4xl font-semibold pl-5 md:pl-0">
            Stats
          </p>
          <div className="h-6 w-6">
            <img className="h-full w-full" src="/etherium.svg" alt="" />
          </div>
        </div>
        <p className="text-sm text-zinc-400 px-5 py-5 md:px-0">
          Ethereum Total Stats start from 06 Jan 2022. <br /> For detailed
          stats:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
          <div
            id="box-1"
            className="border border-opacity-50 border-custom-gray-footer-icon rounded bg-custom-token-bg"
          >
            <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <p className="p-3 font-medium text-sm">Overview</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="p-4 space-y-2 text-start">
                <p className="text-zinc-400 text-sm font-medium">AUM</p>
                <p className="text-zinc-400 text-sm font-medium">$ZLP Pool</p>
                <p className="text-zinc-400 text-sm font-medium">24h Volume</p>
                <p className="text-zinc-400 text-sm font-medium">
                  Long Positions
                </p>
                <p className="text-zinc-400 text-sm font-medium">
                  Short Positions
                </p>
              </div>
              <div className="p-3 space-y-2 text-end">
                <p className="underline decoration-dashed decoration-1 cursor-help font-medium">
                  $33
                </p>
                <p className="underline decoration-dashed decoration-1 cursor-help font-medium">
                  $33
                </p>
                <p className="underline decoration-dashed decoration-1 cursor-help font-medium">
                  $0
                </p>
                <p className="underline decoration-dashed decoration-1 cursor-help font-medium">
                  $0
                </p>
                <p className="underline decoration-dashed decoration-1 cursor-help font-medium">
                  $0
                </p>
              </div>
            </div>
          </div>
          <div
            id="box-2"
            className="border border-opacity-50 border-custom-gray-footer-icon rounded bg-custom-token-bg"
          >
            <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <p className="p-3 text-sm font-medium">Total Stats</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="p-4 space-y-2 text-start">
                <p className="text-zinc-400 text-sm font-medium">Total Fees</p>
                <p className="text-zinc-400 text-sm font-medium">
                  Total Volume
                </p>
                <p className="text-zinc-400 text-sm font-medium">
                  Floor Price Fund
                </p>
              </div>
              <div className="p-3 space-y-2 text-end">
                <p className="underline decoration-dashed decoration-1 cursor-help font-medium">
                  $0
                </p>
                <p className="underline decoration-dashed decoration-1 cursor-help font-medium">
                  $0
                </p>
                <p className="font-medium">$624,863</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-theme font-paragaraph pb-5">
        <div className="flex space-x-2 items-center">
          <p className="font-headlines text-white text-left text-4xl font-semibold px-5 md:px-0">
            Tokens
          </p>
          <div className="h-6 w-6">
            <img className="h-full w-full" src="/etherium.svg" alt="" />
          </div>
        </div>
        <p className="text-base text-zinc-400 my-5 px-5 md:px-0">
          Platform and $ZLP index tokens.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 pt-2">
          <div
            id="box-1"
            className="border border-opacity-50 border-custom-gray-footer-icon rounded flex flex-col md:flex-row items-center justify-between bg-custom-token-bg pb-8 md:pb-0"
          >
            <div className="basis-2/3 h-full">
              <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
                <div className="flex items-center space-x-3 p-4">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full"
                      src="/download.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">$ROMI</p>
                    <p className="text-custom-gray-footer-icon text-xs">
                      $ROMI
                    </p>
                  </div>
                  <div className="mb-4">
                    <FaAngleDown />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="p-4 space-y-2 text-start">
                  <p className="text-zinc-400 text-sm font-medium">Price</p>
                  <p className="text-zinc-400 text-sm font-medium">Supply</p>
                  <p className="text-zinc-400 text-sm font-medium">
                    Total Staked
                  </p>
                  <p className="text-zinc-400 text-sm font-medium">
                    Market Cap
                  </p>
                </div>
                <div className="p-3 space-y-2 text-end">
                  <p className="underline decoration-dashed decoration-1 cursor-help font-medium">
                    $0.00
                  </p>
                  <p className="cursor-help font-medium">10,000 $ROMI</p>
                  <p className="underline decoration-dashed decoration-1 cursor-help font-medium">
                    $0
                  </p>
                  <p className="font-medium">$10</p>
                </div>
              </div>
            </div>
            <div className="basis-1/3 h-full flex items-center justify-center mt-5">
              <div style={{ width: 150, height: 150 }}>
                <CircularProgressbar
                  value={90}
                  strokeWidth={5}
                  className="hover:shadow-lg hover:shadow-blue-400 rounded-full"
                  text="Distribution"
                  styles={{
                    text: {
                      fontSize: 10,
                      color: "#fff",
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div
            id="box-2"
            className="border border-opacity-50 border-custom-gray-footer-icon rounded flex flex-col md:flex-row items-center justify-between bg-custom-token-bg pb-8 md:pb-0"
          >
            <div className="basis-2/3 h-full">
              <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
                <div className="flex items-center space-x-3 p-4">
                  <div className="h-10 w-10 relative">
                    <img
                      className="h-full w-full"
                      src="/download (1).png"
                      alt=""
                    />
                    <img
                      className="h-5 w-5 absolute right-[-1px] bottom-[-1px] rounded-full"
                      src="/etherium.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">$ZLP</p>
                    <p className="text-custom-gray-footer-icon text-xs">$ZLP</p>
                  </div>
                  <div className="mb-4">
                    <FaAngleDown />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="p-4 space-y-2 text-start">
                  <p className="text-zinc-400 text-sm font-medium">Price</p>
                  <p className="text-zinc-400 text-sm font-medium">Supply</p>
                  <p className="text-zinc-400 text-sm font-medium">
                    Total Staked
                  </p>
                  <p className="text-zinc-400 text-sm font-medium">
                    Market Cap
                  </p>
                  <p className="text-zinc-400 text-sm font-medium">
                    Stablecoin Percentage
                  </p>
                </div>
                <div className="p-3 space-y-2 text-end">
                  <p className="font-medium">$1.139</p>
                  <p className="cursor-help font-medium">29 $ZLP</p>
                  <p className="font-medium">$34</p>
                  <p className="font-medium">$34</p>
                  <p className="font-medium">$49.50%</p>
                </div>
              </div>
            </div>
            <div className="basis-1/3 h-full flex items-center justify-center  mt-5">
              <div style={{ width: 150, height: 150 }}>
                <CircularProgressbar
                  value={90}
                  strokeWidth={5}
                  className="hover:shadow-lg hover:shadow-blue-400 rounded-full"
                  text="$ZLP Pool"
                  styles={{
                    text: {
                      fontSize: 10,
                      color: "#fff",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-20 font-paragaraph bg-base-theme">
        <div
          id="last-box"
          className="border border-opacity-50 border-custom-gray-footer-icon rounded bg-custom-token-bg"
        >
          <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon flex items-center">
            <p className="p-3 font-medium text-sm">$ZLP Index Composition</p>
            <div className="h-4 w-4">
              <img className="h-full w-full" src="/etherium.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
            <div className="flex w-full basis-1/2 p-4 items-start justify-between">
              <div className="basis-3/5 ">
                <p className="text-start text-zinc-400 pb-4 text-sm" >TOKEN</p>
                <div className="space-y-4">
                  {/* ......................... */}
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full"
                      src="/gray-etherium.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Ethereum</p>
                    <p className="text-custom-gray-footer-icon text-xs">
                     ETH
                    </p>
                  </div>
                  <div className="mb-4">
                    <FaAngleDown />
                  </div>
                </div>
                {/* ...................... */}
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full"
                      src="/bitcoin.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Wrapped Bitcoin</p>
                    <p className="text-custom-gray-footer-icon text-xs">
                      WBTC
                    </p>
                  </div>
                  <div className="mb-4">
                    <FaAngleDown />
                  </div>
                </div>
                {/* ...................... */}
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full"
                      src="/skull.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">ApeCoin</p>
                    <p className="text-custom-gray-footer-icon text-xs">
                      APE
                    </p>
                  </div>
                  <div className="mb-4">
                    <FaAngleDown />
                  </div>
                </div>
                {/* ...................... */}
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10">
                    <img
                      className="h-full w-full"
                      src="/blueBitcoin.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">USD Coin</p>
                    <p className="text-custom-gray-footer-icon text-xs">
                     USDC
                    </p>
                  </div>
                  <div className="mb-4">
                    <FaAngleDown />
                  </div>
                </div>
                {/* ...................... */}
                </div>
              </div>
              <div className="basis-1/5">
                <p className="text-start text-zinc-400 pb-4 text-sm">PRICE</p>
                <div className="space-y-10">
                <p className="text-sm">$1,788.83</p>
                <p className="text-sm">$34,173.14</p>
                <p className="text-sm">$1.37</p>
                <p className="text-sm">$1.00</p>
                </div>
              </div>
              <div className="basis-1/5 text-end">
                <p className="text-zinc-400 pb-4 my-auto text-sm">POOL</p>
                <div className="space-y-10">
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm">$19</p>
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm">$0</p>
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm">$0</p>
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm">$14</p>
                </div>
              </div>
            </div>
            <div className="w-full flex basis-1/2 p-4 items-start justify-between">
            <div className="basis-1/2">
                <p className="text-start text-zinc-400 pb-4 my-auto text-sm">WEIGHT</p>
                <div className="space-y-10">
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm">50.49% / 25.00%</p>
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm">0.00% / 25.00%</p>
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm">0.00% / 25.00%</p>
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm">49.50% / 25.00%</p>
                </div>
              </div>
              <div className="basis-1/2 text-end">
                <p className="text-zinc-400 pb-4 text-sm">UTILIZATION</p>
                <div className="space-y-10">
               <p className="text-sm">0.00%</p>
               <p className="text-sm">0.00%</p>
               <p className="text-sm">0.00%</p>
               <p className="text-sm">0.00%</p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
