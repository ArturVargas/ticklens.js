import { client } from "../../config/Client";
import { CREATE_PROFILE } from "../../lensAPI/Mutations";
import {
  DEFAULT_PROFILE,
  GET_PROFILES_BY,
  GET_PROFILES_WHO_MIRRORED,
  GET_PROFILE_BY,
  GET_ON_CHAIN_IDENTITY,
} from "../../lensAPI/Querys";

// Only for testnet
const CreateProfile = async (
  lens_handler: string,
  profilePictureUri: any,
  token: string
): Promise<any> => {
  try {
    const { data, operation } = await client
      .mutation(
        CREATE_PROFILE,
        {
          request: {
            handle: lens_handler,
            profilePictureUri,
            followModule: {
              feeFollowModule: {
                // first filter to avoid bots follows this user
                amount: {
                  currency: "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e",
                  value: "1.1100",
                },
                recipient: "0xC8eE1d8f182Ff0B4a658b9464e3678C92b84a8cB",
              },
            },
            followNFTURI: null,
          },
        },
        {
          fetchOptions: {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          },
        }
      )
      .toPromise();

    return { data, operation };
  } catch (error: any) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

const GetDefaultProfile = async (eth_address: string): Promise<any> => {
  try {
    const { data, operation } = await client
      .query(DEFAULT_PROFILE, {
        request: {
          ethereumAddress: eth_address,
        },
      })
      .toPromise();

    return { data, operation };
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

const GetProfilesByIds = async (profileIds: Array<string>): Promise<any> => {
  try {
    const { data, operation } = await client
      .query(GET_PROFILES_BY, {
        request: {
          profileIds,
          limit: 10,
        },
      })
      .toPromise();

    return { data, operation };
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

const GetProfilesOwnedBy = async (ownedBy: Array<string>): Promise<any> => {
  try {
    const { data, operation } = await client
      .query(GET_PROFILES_BY, {
        request: {
          ownedBy,
          limit: 10,
        },
      })
      .toPromise();

    return { data, operation };
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

const GetProfilesByHandle = async (handles: Array<string>): Promise<any> => {
  try {
    const { data, operation } = await client
      .query(GET_PROFILES_BY, {
        request: {
          handles,
          limit: handles.length,
        },
      })
      .toPromise();

    return { data, operation };
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

// to get WL or ticket pre-sale
const GetProfilesWhoMirrored = async (publicationId: string): Promise<any> => {
  try {
    const { data, operation } = await client
      .query(GET_PROFILES_WHO_MIRRORED, {
        request: {
          whoMirroredPublicationId: publicationId,
          limit: 10,
        },
      })
      .toPromise();

    return { data, operation };
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

const GetProfileById = async (profileId: string): Promise<any> => {
  try {
    const { data, operation } = await client
      .query(GET_PROFILE_BY, {
        request: {
          profileId,
        },
      })
      .toPromise();

    return { data, operation };
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

const GetProfileByHandle = async (handle: string): Promise<any> => {
  try {
    const { data, operation } = await client
      .query(GET_PROFILE_BY, {
        request: {
          handle,
        },
      })
      .toPromise();

    return { data, operation };
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

//  get identity from the event organizer
const GetOnChainIdentity = async (profileId: string): Promise<any> => {
  try {
    const { data, operation } = await client
      .query(GET_ON_CHAIN_IDENTITY, {
        request: {
          profileId,
        },
      })
      .toPromise();

    return { data, operation };
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

export {
  CreateProfile,
  GetDefaultProfile,
  GetProfilesByIds,
  GetProfilesOwnedBy,
  GetProfilesByHandle,
  GetProfilesWhoMirrored,
  GetProfileById,
  GetProfileByHandle,
  GetOnChainIdentity,
};
