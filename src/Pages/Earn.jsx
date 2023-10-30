import React from "react";

const Earn = () => {
  return (
    <div>
      <div className="bg-base-theme font-paragaraph py-10">
        <div className="flex space-x-2 items-center">
          <p className="font-headlines text-white text-left text-4xl font-semibold px-5 md:px-0">
            Earn
          </p>
        </div>
        <p className="text-sm text-zinc-400 px-5 my-5 md:px-0">
          Stake $ROMI and $ZLP to earn rewards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
          <div
            id="box-1"
            className="border border-opacity-50 border-custom-gray-footer-icon rounded bg-custom-token-bg"
          >
            <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <p className="p-3 font-medium text-sm">$ROMI</p>
            </div>
            <div className="flex items-center justify-between border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <div className="p-4 space-y-2 text-start">
                <p className="text-zinc-400 text-sm font-medium">Price</p>
                <p className="text-zinc-400 text-sm font-medium">Wallet</p>
                <p className="text-zinc-400 text-sm font-medium">Staked</p>
              </div>
              <div className="p-3 space-y-2 text-end">
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                  $0.00
                </p>
                <p className="font-medium text-sm">... $ROMI ($...)</p>
                <p className="font-medium text-sm">... $ROMI ($...)</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <div className="p-4 space-y-2 text-start">
                <p className="text-zinc-400 text-sm font-medium">APR</p>
                <p className="text-zinc-400 text-sm font-medium">Rewards</p>
                <p className="text-zinc-400 text-sm font-medium">
                  Multiplier Points APR
                </p>
                <p className="text-zinc-400 text-sm font-medium">
                  Boost Percentage
                </p>
              </div>
              <div className="p-3 space-y-2 text-end">
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                  ...%
                </p>
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                  $...
                </p>
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                  100.00%
                </p>
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                  ...%
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <div className="p-4 space-y-2 text-start">
                <p className="text-zinc-400 text-sm font-medium">
                  Total Staked
                </p>
                <p className="text-zinc-400 text-sm font-medium">
                  Total Supply
                </p>
              </div>
              <div className="p-3 space-y-2 text-end">
                <p className="text-sm font-medium">0 $ROMI ($...)</p>
                <p className="text-sm font-medium">10,000 $ROMI ($10)</p>
              </div>
            </div>
            <div>
              <a
                className="inline-block rounded bg-custom-green text-sm px-5 py-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400 m-4"
                href="/download"
              >
                Buy $ROMI
              </a>
            </div>
          </div>
          <div
            id="box-2"
            className="border border-opacity-50 border-custom-gray-footer-icon rounded bg-custom-token-bg flex flex-col justify-between"
          >
            <div className="">
              <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
                <p className="p-3 text-sm font-medium">Total Rewards</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="p-4 space-y-2 text-start">
                  <p className="text-zinc-400 text-sm font-medium">
                    ETH (WETH)
                  </p>
                  <p className="text-zinc-400 text-sm font-medium">$ROMI</p>
                  <p className="text-zinc-400 text-sm font-medium">
                    Escrowed $ROMI
                  </p>
                  <p className="text-zinc-400 text-sm font-medium">
                    Multiplier Points
                  </p>
                  <p className="text-zinc-400 text-sm font-medium">
                    Staked Multiplier Points
                  </p>
                  <p className="text-zinc-400 text-sm font-medium">Total</p>
                </div>
                <div className="p-3 space-y-2 text-end">
                  <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                    ... ($...)
                  </p>
                  <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                    ... ($...)
                  </p>
                  <p className="font-medium text-sm">...</p>
                  <p className="font-medium text-sm">...</p>
                  <p className="font-medium text-sm">...</p>
                  <p className="font-medium text-sm">$...</p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-opacity-50 border-t-custom-gray-footer-icon">
              <a
                className="inline-block rounded bg-custom-green text-sm px-5 py-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400 m-4"
                href="/download"
              >
                Connect Wallet
              </a>
            </div>
          </div>
          <div
            id="box-3"
            className="border border-opacity-50 border-custom-gray-footer-icon rounded bg-custom-token-bg flex flex-col justify-between"
          >
            <div>
              <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
                <p className="p-3 font-medium text-sm ">$ZLP (Ethereum)</p>
              </div>
              <div className="flex items-center justify-between border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
                <div className="p-4 space-y-2 text-start">
                  <p className="text-zinc-400 text-sm font-medium">Price</p>
                  <p className="text-zinc-400 text-sm font-medium">Wallet</p>
                  <p className="text-zinc-400 text-sm font-medium">Staked</p>
                </div>
                <div className="p-3 space-y-2 text-end">
                  <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                    $...
                  </p>
                  <p className="font-medium text-sm">... $ZLP ($...)</p>
                  <p className="font-medium text-sm">... $ZLP ($...)</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
                <div className="p-4 space-y-2 text-start">
                  <p className="text-zinc-400 text-sm font-medium">APR</p>
                  <p className="text-zinc-400 text-sm font-medium">Rewards</p>
                </div>
                <div className="p-3 space-y-2 text-end">
                  <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                    ...%
                  </p>
                  <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                    $...
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="p-4 space-y-2 text-start">
                  <p className="text-zinc-400 text-sm font-medium">
                    Total Staked
                  </p>
                  <p className="text-zinc-400 text-sm font-medium">
                    Total Supply
                  </p>
                </div>
                <div className="p-3 space-y-2 text-end">
                  <p className="text-sm font-medium">... $ZLP ($...)</p>
                  <p className="text-sm font-medium">... $ZLP ($...)</p>
                </div>
              </div>
            </div>
            <div className="flex items-center border-t-2 border-opacity-50 border-t-custom-gray-footer-icon">
              <a
                className="inline-block rounded bg-custom-green text-sm px-5 py-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400 mx-2 my-4"
                href="/download"
              >
                Buy $ZLP
              </a>
              <a
                className="inline-block rounded bg-custom-green text-sm px-5 py-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400  mx-2 my-4"
                href="/download"
              >
                Sell $ZLP
              </a>
            </div>
          </div>
          <div
            id="box-4"
            className="border border-opacity-50 border-custom-gray-footer-icon rounded bg-custom-token-bg"
          >
            <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <p className="p-3 font-medium text-sm">Escrowed $ROMI</p>
            </div>
            <div className="flex items-center justify-between border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <div className="p-4 space-y-2 text-start">
                <p className="text-zinc-400 text-sm font-medium">Price</p>
                <p className="text-zinc-400 text-sm font-medium">Wallet</p>
                <p className="text-zinc-400 text-sm font-medium">Staked</p>
              </div>
              <div className="p-3 space-y-2 text-end">
                <p className="text-sm font-medium">$0.00</p>
                <p className="font-medium text-sm">... esROMI ($...)</p>
                <p className="font-medium text-sm">... esROMI ($...)</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <div className="p-4 space-y-2 text-start">
                <p className="text-zinc-400 text-sm font-medium">APR</p>

                <p className="text-zinc-400 text-sm font-medium">
                  Multiplier Points APR
                </p>
              </div>
              <div className="p-3 space-y-2 text-end">
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                  ...%
                </p>

                <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                  100.00%
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <div className="p-4 space-y-2 text-start">
                <p className="text-zinc-400 text-sm font-medium">
                  Total Staked
                </p>
                <p className="text-zinc-400 text-sm font-medium">
                  Total Supply
                </p>
              </div>
              <div className="p-3 space-y-2 text-end">
                <p className="text-sm font-medium">... esROMI ($...)</p>
                <p className="text-sm font-medium">1,023,379 esROMI ($1,070)</p>
              </div>
            </div>
            <div>
              <a
                className="inline-block rounded bg-custom-green text-sm px-5 py-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400 m-4"
                href="/download"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-headlines text-white text-left text-4xl font-semibold px-5 md:px-0">
          Vest
        </p>
      </div>
      <p className="text-sm text-zinc-400 py-5 px-5 md:px-0 font-paragaraph">
        Convert esROMI tokens to $ROMI tokens. <br />
        Please read the vesting details before using the vaults.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 pb-16 font-paragaraph">
        <div
          id="box-1"
          className="border border-opacity-50 border-custom-gray-footer-icon rounded bg-custom-token-bg flex flex-col justify-between"
        >
          <div className="">
            <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <p className="p-3 text-sm font-medium">$ROMI Vault</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="p-4 space-y-2 text-start">
                <p className="text-zinc-400 text-sm font-medium">
                  Staked Tokens
                </p>
                <p className="text-zinc-400 text-sm font-medium">
                  Reserved for Vesting
                </p>
                <p className="text-zinc-400 text-sm font-medium">
                  Vesting Status
                </p>
                <p className="text-zinc-400 text-sm font-medium">Claimable</p>
              </div>
              <div className="p-3 space-y-2 text-end">
                <p className="underline decoration-dashed decoration-1 cursor-help text-sm font-medium">
                  ...
                </p>
                <p className="text-sm font-medium">0.00 / ...</p>
                <p className="text-sm underline decoration-dashed decoration-1 cursor-help font-medium">
                  0.0000 / 0.0000
                </p>
                <p className="text-sm underline decoration-dashed decoration-1 cursor-help font-medium">
                  0.0000 $ROMI
                </p>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-opacity-50 border-t-custom-gray-footer-icon">
            <a
              className="inline-block rounded bg-custom-green text-sm px-5 py-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400 m-4"
              href="/download"
            >
              Connect Wallet
            </a>
          </div>
        </div>
        <div
          id="box-2"
          className="border border-opacity-50 border-custom-gray-footer-icon rounded bg-custom-token-bg flex flex-col justify-between"
        >
          <div className="">
            <div className="border-b-2 border-opacity-50 border-b-custom-gray-footer-icon">
              <p className="p-3 text-sm font-medium">$ZLP Vault</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="p-4 space-y-2 text-start">
                <p className="text-zinc-400 text-sm font-medium">
                  Staked Tokens
                </p>
                <p className="text-zinc-400 text-sm font-medium">
                  Reserved for Vesting
                </p>
                <p className="text-zinc-400 text-sm font-medium">
                  Vesting Status
                </p>
                <p className="text-zinc-400 text-sm font-medium">Claimable</p>
              </div>
              <div className="p-3 space-y-2 text-end">
                <p className="text-sm font-medium">
                  ... $ZLP
                </p>
                <p className=" text-sm font-medium">
                  0.00 / ...
                </p>
                <p className="underline decoration-dashed decoration-1 cursor-help font-medium text-sm">0.0000 / 0.0000</p>
                <p className=" underline decoration-dashed decoration-1 cursor-help font-medium text-sm">0.0000 $ROMI</p>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-opacity-50 border-t-custom-gray-footer-icon">
            <a
              className="inline-block rounded bg-custom-green text-sm px-5 py-2 text-white transition hover:bg-opacity-40 focus:outline-none focus:ring active:bg-green-400 m-4"
              href="/download"
            >
               Connect Wallet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
