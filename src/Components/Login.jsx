import React, { useContext, useState } from "react";
import binance from "../assets/loginwith/binance.png";
import coin from "../assets/loginwith/coin.svg";
import meta from "../assets/loginwith/meta.png";
import trust from "../assets/loginwith/trust.png";
import all from "../assets/loginwith/all.png";
// import Web3Modal from 'web3modal';
// import WalletConnectProvider from '@walletconnect/web3-provider';
// import WalletConnectProvider from "@walletconnect/web3-provider";
const Login = ({ setAccountdata, setconnections }) => {
  const [error, setError] = useState(null);

  // Function to connect to MetaMask
  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setconnections(false);
        setAccountdata(accounts); // Set the connected account
        setError(null);

        // Initialize Web3
        // const web3 = new Web3(window.ethereum);
      } catch (err) {
        setError("Failed to connect to MetaMask.");
        console.error(err);
      }
    } else {
      setError("MetaMask is not installed.");
    }
  };
  // const connectWithProvider = async (providerOptions) => {
  //   try {
  //     const web3Modal = new Web3Modal({ cacheProvider: false, providerOptions });
  //     const instance = await web3Modal.connect();
  //     const provider = new ethers.providers.Web3Provider(instance);
  //     const signer = provider.getSigner();
  //     const userAddress = await signer.getAddress();
  //     setAccount(userAddress);
  //   } catch (err) {
  //     console.error("Connection failed:", err);
  //   }
  // };

  // const providers = {
  //   MetaMask: {},
  //   TrustWallet: {
  //     walletconnect: {
  //       package: WalletConnectProvider,
  //       options: { infuraId: "YOUR_INFURA_PROJECT_ID" },
  //     },
  //   },
  //   Exodus: {}, // Exodus uses MetaMask protocol for browser extension.
  //   Coin98: {}, // Requires Coin98 Extension installation.
  //   GuardaWallet: {}, // Similar to MetaMask if installed as browser extension.
  //   BinanceWeb3: {}, // Binance Chain Wallet extension.
  //   OKXWeb3: {}, // OKX Wallet extension.
  //   TokenPocket: {
  //     walletconnect: {
  //       package: WalletConnectProvider,
  //       options: { infuraId: "YOUR_INFURA_PROJECT_ID" },
  //     },
  //   },
  //   KleverWallet: {
  //     walletconnect: {
  //       package: WalletConnectProvider,
  //       options: { infuraId: "YOUR_INFURA_PROJECT_ID" },
  //     },
  //   },
  // };

  // const providerOptions = {
  //   walletconnect: {
  //     package: WalletConnectProvider,
  //     options: {
  //       rpc: {
  //         1: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Replace with your Infura project ID
  //       },
  //     },
  //   },
  // };
  // const walletOptions = [
  //   { name: 'MetaMask', id: 'injected' },
  //   { name: 'Trust Wallet', id: 'walletconnect' },
  //   { name: 'Exodus', id: 'walletconnect' },
  //   { name: 'Coin98 Wallet', id: 'walletconnect' },
  //   { name: 'Guarda Wallet', id: 'walletconnect' },
  //   { name: 'Binance Web3 Wallet', id: 'walletconnect' },
  //   { name: 'OKX Web3 Wallet', id: 'walletconnect' },
  //   { name: 'TokenPocket', id: 'walletconnect' },
  //   { name: 'Klever Wallet', id: 'walletconnect' },
  // ];
  // const connectWallet = async (walletId) => {
  //   try {
  //     const web3Modal = new Web3Modal({
  //       cacheProvider: false,
  //       providerOptions,
  //     });

  //     const instance = await web3Modal.connectTo(walletId);
  //     const provider = new ethers.providers.Web3Provider(instance);
  //     const signer = provider.getSigner();
  //     const address = await signer.getAddress();
  //     setAccountdata(address);
  //   } catch (error) {
  //     console.error('Connection Error:', error);
  //   }
  // };
  // const { user, loading, loginWithBinance, logout } = useContext(AuthContext);

  return (
    <div>
      <>
        {/* {walletOptions.map((wallet) => (
          <button
            key={wallet.name}
            // onClick={() => connectWallet(wallet.id)}
            className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow hover:bg-blue-600 transition"
          >
            {wallet.name}
          </button>
        ))} */}
        <button className=" cursor-pointer items-center  bg-teal-950/50 border w-full mt-2  px-2 py-2 flex justify-between text-white text-x border-cyan-400 rounded-xl">
          <p className="flex items-center  text-xs gap-2">
            <img src={binance} alt="" className="w-4" /> Binance
          </p>
          <p className="text-[8px] flex items-center px-2 bg-teal-700/55 p-1 rounded-full">
            QR Code
          </p>
        </button>
        <button
          className=" cursor-pointer items-center  bg-teal-950/50 border w-full mt-2  px-2 py-2 flex justify-between text-white text-x border-cyan-400 rounded-xl"
          onClick={connectMetaMask}
        >
          <p className="flex items-center text-xs gap-2">
            <img src={meta} alt="" className="w-4" /> Meta Mask
          </p>
          <p className="text-[8px] flex items-center px-2 bg-teal-700/55 p-1 rounded-full">
            QR Code
          </p>
        </button>
        <button className=" cursor-pointer items-center  bg-teal-950/50 border w-full mt-2  px-2 py-2 flex justify-between text-white text-x border-cyan-400 rounded-xl">
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
        <button className=" cursor-pointer items-center  bg-teal-950/50 border w-full mt-2  px-2 py-2 flex justify-between text-white text-x border-cyan-400 rounded-xl">
          <p className="flex items-center text-xs gap-2">
            <img src={all} alt="" className="w-4" /> All Wallets
          </p>
          <p className="text-[8px] flex items-center px-2 bg-teal-700/55 p-1 rounded-full">
            QR Code
          </p>
        </button>
      </>
    </div>
  );
};

export default Login;
