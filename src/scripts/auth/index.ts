import { client } from "../../config/Client";
import { CHALLENGE, VERIFY_TOKEN } from "../../lensAPI/Querys";
import { AUTHENTICATION, REFRESH_TOKEN } from "../../lensAPI/Mutations";

const GetChallenge = async (address: string): Promise<any> => {
  try {
    const challenge = await client
      .query(CHALLENGE, {
        request: { address },
      })
      .toPromise();

    return challenge;
  } catch (error: any) {
    console.log("!! [ERROR] ", error);
    return error.message;
  }
};

const Authenticate = async (
  address: string,
  signature: string
): Promise<any> => {
  try {
    const data = await client
      .mutation(AUTHENTICATION, {
        request: {
          address,
          signature,
        },
      })
      .toPromise();

    return data;
  } catch (error: any) {
    console.log("!! [ERROR] ", error);
    return error;
  }
};

const RefreshToken = async (refreshToken: string): Promise<any> => {
  try {
    const data = await client
      .mutation(REFRESH_TOKEN, {
        request: {
          refreshToken,
        },
      })
      .toPromise();

    return data;
  } catch (error) {
    console.log("!! [ERROR] ", error);
    return error;
  }
};

const VerifyToken = async (accessToken: string): Promise<any> => {
  try {
    const data = await client
      .query(VERIFY_TOKEN, {
        request: {
          accessToken,
        },
      })
      .toPromise();

    return data;
  } catch (error) {
    console.log("!! [ERROR] ", error);
    return error;
  }
};

export { GetChallenge, Authenticate, RefreshToken, VerifyToken };
