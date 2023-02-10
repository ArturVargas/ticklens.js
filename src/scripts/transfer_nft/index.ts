import Web3 from "web3";
import { Collect } from "../../config/CollectNFT";

export const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

export const Transfer = async (
  nft_address: string,
  to: string,
  tokenId: number,
  privateKey: string
): Promise<any> => {
  try {
    const contract = new web3.eth.Contract(Collect as any, nft_address);

    const account = web3.eth.accounts.privateKeyToAccount(privateKey);

    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;

    const txTransfer = await contract.methods.safeTransferFrom(
      account.address,
      to,
      tokenId
    );

    const encodeTransfer = txTransfer.encodeABI();

    const gasPrice = await web3.eth.getGasPrice();
    const gasCost = await web3.eth.estimateGas({
      to: nft_address,
      data: encodeTransfer,
    });

    const txData = {
      from: account.address,
      to: nft_address,
      data: encodeTransfer,
      gas: gasCost,
      gasPrice,
    };

    await web3.eth.sendTransaction(txData).on("receipt", (receipt) => {
      return { receipt };
    });
  } catch (error) {
    console.log("[ERROR] !! ", error);
    return { error };
  }
};
