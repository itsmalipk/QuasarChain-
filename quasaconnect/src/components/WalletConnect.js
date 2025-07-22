import { useState } from "react";
import { ethers } from "ethers";

function WalletConnect({ setWalletAddress }) {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(account);
        setConnected(true);
      } catch (err) {
        console.error("Connection failed", err);
      }
    } else {
      alert("Install MetaMask to use this DApp.");
    }
  };

  return (
    <button onClick={connectWallet}>
      {connected ? "Wallet Connected" : "Connect Wallet"}
    </button>
  );
}

export default WalletConnect;