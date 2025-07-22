import { ethers } from "ethers";
import presaleAbi from "../abi/Presale.json";

const CONTRACT_ADDRESS = "0xYourContractAddress"; // Replace after deployment

function TokenPurchase() {
  const handleBuy = async () => {
    if (!window.ethereum) return alert("MetaMask not detected.");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, presaleAbi, signer);

    try {
      const tx = await contract.buyTokens({
        value: ethers.utils.parseEther("0.01")
      });
      await tx.wait();
      alert("Tokens purchased successfully!");
    } catch (err) {
      console.error("Transaction failed:", err);
      alert("Transaction failed.");
    }
  };

  return <button onClick={handleBuy}>Buy Tokens (0.01 ETH)</button>;
}

export default TokenPurchase;