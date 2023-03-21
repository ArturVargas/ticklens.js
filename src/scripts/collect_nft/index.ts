import Web3 from "web3";
import { LensHubAbi } from "../../config/LensHub";
import { LENS_HUB_ADDRESSES } from "../utils/constants";

export const web3 = new Web3("https://polygon-rpc.com");

export const Collect = async (
  chainId: number = 80001,
  profileId: number,
  publicationId: number,
  data: any,
  privateKey: string
): Promise<any> => {
  try {
    const contract = new web3.eth.Contract(
      LensHubAbi as any,
      LENS_HUB_ADDRESSES[chainId]
    );

    const account = web3.eth.accounts.privateKeyToAccount(privateKey);

    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;

    const txCollect = await contract.methods.collect(
      profileId,
      publicationId,
      data
    );

    const encodeCollect = txCollect.encodeABI();

    const gasPrice = await web3.eth.getGasPrice();
    const gasCost = await web3.eth.estimateGas({
      to: LENS_HUB_ADDRESSES[chainId],
      data: encodeCollect,
    });

    const txData = {
      from: account.address,
      to: LENS_HUB_ADDRESSES[chainId],
      data: encodeCollect,
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
