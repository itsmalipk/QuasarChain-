import { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import TokenPurchase from "./components/TokenPurchase";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <div>
      <h1>QuasaConnect – Token Presale Demo</h1>
      <WalletConnect setWalletAddress={setWalletAddress} />
      {walletAddress && <TokenPurchase />}
    </div>
  );
}

export default App;