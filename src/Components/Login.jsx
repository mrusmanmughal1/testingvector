import React, { useState } from "react";
import binance from "../assets/loginwith/binance.png";
import coin from "../assets/loginwith/coin.svg";
import meta from "../assets/loginwith/meta.png";
import trust from "../assets/loginwith/trust.png";
import all from "../assets/loginwith/all.png";
// import { useAppKit } from "@reown/appkit/react";
// import detectEthereumProvider from '@metamask/detect-provider';
// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";
// import Web3 from 'web3';

const Login = ({ setAccountdata, setconnections, setAccount }) => {
  const [error, setError] = useState(null);

  // Function to connect to MetaMask
  // const connectMetaMask = async () => {
  //   const provider = await detectEthereumProvider();
  //   if (provider) {
  //     try {
  //       await provider.request({ method: "eth_requestAccounts" });
  //       const accounts = await provider.request({ method: 'eth_accounts' });
  //       setconnections(false);
  //       setAccountdata(accounts);
  //       setError(null);
  //     } catch (err) {
  //       setError("Failed to connect to MetaMask.");
  //       console.error(err);
  //     }
  //   } else {
  //     setError("MetaMask is not installed.");
  //   }
  // };

  // const connectWalletConnect = async () => {
  //   const connector = new WalletConnect({
  //     bridge: "https://bridge.walletconnect.org",
  //     qrcodeModal: QRCodeModal,
  //   });

  //   if (!connector.connected) {
  //     connector.createSession();
  //   }

  //   connector.on("connect", (error, payload) => {
  //     if (error) {
  //       setError("Failed to connect with WalletConnect.");
  //       console.error(error);
  //       return;
  //     }

  //     const { accounts, chainId } = payload.params[0];
  //     setconnections(false);
  //     setAccountdata(accounts);
  //     setError(null);
  //   });

  //   connector.on("session_update", (error, payload) => {
  //     if (error) {
  //       console.error(error);
  //       return;
  //     }
  //     const { accounts, chainId } = payload.params[0];
  //     setAccountdata(accounts);
  //   });

  //   connector.on("disconnect", (error, payload) => {
  //     if (error) {
  //       console.error(error);
  //       return;
  //     }
  //     console.log("Wallet disconnected");
  //   });
  // };

  return (
    <div>
      <>
        <button className=" cursor-pointer items-center  bg-teal-950/50 border w-full mt-2  px-2 py-2 flex justify-between text-white text-x border-cyan-400 rounded-xl">
          <p className="flex items-center  text-xs gap-2">
            <img src={binance} alt="" className="w-4" /> Binance
          </p>
          <p className="text-[8px] flex items-center px-2 bg-teal-700/55 p-1 rounded-full">
            QR Code
          </p>
        </button>
        <button className=" cursor-pointer items-center  bg-teal-950/50 border w-full mt-2  px-2 py-2 flex justify-between text-white text-x border-cyan-400 rounded-xl">
          <p className="flex items-center text-xs gap-2">
            <img src={meta} alt="" className="w-4" /> Meta Mask
          </p>
          <p className="text-[8px] flex items-center px-2 bg-teal-700/55 p-1 rounded-full">
            QR Code
          </p>
        </button>
        <button
          className=" cursor-pointer items-center  bg-teal-950/50 border w-full mt-2  px-2 py-2 flex justify-between text-white text-x border-cyan-400 rounded-xl"
          // onClick={connectWalletConnect}
        >
          <p className="flex items-center text-xs gap-2">
            <img src={trust} alt="" className="w-4" /> Trust Wallet
          </p>
          <p className="text-[8px] flex items-center px-2 bg-teal-700/55 p-1 rounded-full">
            QR Code
          </p>
        </button>
        <button className=" cursor-pointer items-center  bg-teal-950/50 border w-full mt-2  px-2 py-2 flex justify-between text-white text-x border-cyan-400 rounded-xl">
          <p className="flex items-center text-xs gap-2">
            <img src={coin} alt="" className="w-4" /> Coinbase
          </p>
          <p className="text-[8px] flex items-center px-2 bg-teal-700/55 p-1 rounded-full">
            QR Code
          </p>
        </button>
        <button
          className=" cursor-pointer items-center  bg-teal-950/50 border w-full mt-2  px-2 py-2 flex justify-between text-white text-x border-cyan-400 rounded-xl"
          // onClick={connectWalletConnect}
        >
          <p className="flex items-center text-xs gap-2">
            <img src={all} alt="" className="w-4" /> All Wallets
          </p>
          <p className="text-[8px] flex items-center px-2 bg-teal-700/55 p-1 rounded-full">
            QR Code
          </p>
        </button>
      </>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
