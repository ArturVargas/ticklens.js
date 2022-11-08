import { client } from "../../config/Client";
import { GET_PROFILE_STATS } from "../../lensAPI/Querys";

// para saber que organizadores de eventos han tenido más engagement
const GetProfileStats = async (profileId: string): Promise<any> => {
  try {
    const { data, operation } = await client
      .query(GET_PROFILE_STATS, {
        request: {
          profileId,
        },
      })
      .toPromise();

    return { data, operation };
  } catch (error: any) {
    console.log("!!! ERROR: ", error);
    return error;
  }
};

export { GetProfileStats };
