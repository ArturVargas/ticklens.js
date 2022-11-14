import { client } from "../../config/Client";
import { ADD_REACTION, REMOVE_REACTION } from "../../lensAPI/Mutations";

enum Reaction {
  upvote = "UPVOTE",
  downvote = "DOWNVOTE",
}

const AddReaction = async (
  profileId: string,
  reaction: Reaction,
  publicationId: string,
  token: string
): Promise<any> => {
  try {
    const { data, operation } = await client
      .mutation(
        ADD_REACTION,
        {
          request: {
            profileId,
            reaction,
            publicationId,
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

const RemoveReaction = async (
  profileId: string,
  reaction: Reaction,
  publicationId: string,
  token: string
): Promise<any> => {
  try {
    const { data, operation } = await client
      .mutation(
        REMOVE_REACTION,
        {
          request: {
            profileId,
            reaction,
            publicationId,
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

export { AddReaction, RemoveReaction };
