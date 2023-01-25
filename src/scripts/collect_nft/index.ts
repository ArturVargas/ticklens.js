import Web3 from "web3";
import { LensHubAbi } from "../../config/LensHub";
import { LENS_HUB_ADDRESSES } from "../utils/constants";

export const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

export const Collect = async (
  profileId: number,
  publicationId: number,
  data: any,
  privateKey: string
): Promise<any> => {
  try {
    const contract = new web3.eth.Contract(
      LensHubAbi as any,
      LENS_HUB_ADDRESSES[80001]
    );

    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    console.log("Account ", account);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;

    const txCollect = await contract.methods.collect(
      profileId,
      publicationId,
      data
    );

    const encodeCollect = txCollect.encodeABI();

    const gasPrice = await web3.eth.getGasPrice();
    console.log("GAS_PRICE ", gasPrice);

    console.log("Here is ok 3!");

    const gasCost = await txCollect.estimateGas({ from: account.address });

    // const [gasPrice, gasCost] = await Promise.all([
    //   web3.eth.getGasPrice(),
    //   txCollect.estimateGas({ from: account.address }),
    // ]);

    console.log("Here is ok 4!");
    const txData = {
      from: account.address,
      to: LENS_HUB_ADDRESSES[80001],
      data: encodeCollect,
      gas: gasCost,
      gasPrice,
    };
    console.log("Here is ok 5!");
    const receipt = await web3.eth.sendTransaction(txData);
    console.log("--->>> ", receipt);
  } catch (error) {
    console.log("[ERROR] !! ", error);
  }
};

Collect(1, 1, [], "your_private_key");
