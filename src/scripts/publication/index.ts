import { client } from "../../config/Client";
import { VALIDATE_METADATA } from "../../lensAPI/Querys";
import { CREATE_POST_TYPED_DATA } from "../../lensAPI/Mutations";

interface CollectModules {
  // this module works to allowing anyone collect publications with no fees
  freeCollectModule: { followerOnly: true };
  // this module works to disallowing all collects
  revertCollectModule: boolean;
  // this module has not time limit, followers only unlimited mints, referral fee.
  feeCollectModule: {
    amount: {
      currency: string; // currency address whitelisted,
      value: string;
    };
    recipient: string; // wallet address where the funds will be collected,
    referralFee: number; // percentage fee from 0 to 100
    followerOnly: boolean; // allow or disable  the ability to collect for all profiles or only the followers
  };
  limitedFeeCollectModule: Object; // This collect module has no time limit, follower only limited mints, and an optional referral fee.
}

interface PostEvent {
  profileId: string;
  contentURI: string;
  collectModule?: CollectModules;
  referenceModule: object;
}

const GetMetadataValidation = async (metadata: object): Promise<any> => {
  try {
    const { data, operation } = await client
      .query(VALIDATE_METADATA, {
        request: {
          metadatav2: {
            ...metadata,
          },
        },
      })
      .toPromise();

    return { data, operation };
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

// it's a post with no collect module announcing the event
const PublishEvent = async (event: PostEvent, token: string): Promise<any> => {
  console.log(token);
  try {
    const { data, operation } = await client
      .mutation(
        CREATE_POST_TYPED_DATA,
        {
          request: {
            ...event,
            collectModule: { revertCollectModule: true },
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
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

// it's a post with limited fee collect module
const CreateTickets = async (ticketsData: any, token: string): Promise<any> => {
  console.log(token);
  try {
    const { data, operation } = await client
      .mutation(
        CREATE_POST_TYPED_DATA,
        {
          request: {
            profileId: ticketsData.profileId,
            contentURI: ticketsData.contentURI,
            collectModule: {
              limitedFeeCollectModule: {
                collectLimit: ticketsData.maxTickets,
                amount: {
                  currency: ticketsData.currency,
                  value: ticketsData.ticketPrice,
                },
                recipient: ticketsData.recipient,
                referralFee: ticketsData.referralFee,
                followerOnly: ticketsData.followerOnly || true,
              },
            },
            referenceModule: {
              followerOnlyReferenceModule: ticketsData.followerOnly || true,
            },
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
  } catch (error) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

// @TODO
// Mirror for the followers - para que el asistente al evento pueda compartir las publicaciones.
// Comment for the followers - para que el asistente al evento pueda comentar las publicaciones.
// Reactions
// Publication Revenue
// Reporting

export { GetMetadataValidation, PublishEvent, CreateTickets };
