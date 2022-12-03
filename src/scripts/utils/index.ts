import Arweave from "arweave";

const trimify = (value: string): string =>
  value?.replace(/\n\s*\n/g, "\n\n").trim();

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

export const createArweaveWallet = async () => {
  try {
    let key = await arweave.wallets.generate();
    return key;
  } catch (error) {
    console.log("[ERROR] !!! ");
    return error;
  }
};

export const uploadToArweave = async (data: any, key: any): Promise<any> => {
  try {
    // const dataBuffer = Buffer.from(data, "utf-8");
    let transaction = await arweave.createTransaction(
      { data: Buffer.from(JSON.stringify(data), "utf-8") },
      key
    );
    console.log("TX ", transaction);
  } catch (error) {
    console.log("[ERROR] !!! ", error);
    return error;
  }
};
//createArweaveWallet();
const attributes = [
  {
    traitType: "type",
    displayType: "string",
    value: "image",
  },
];

const aKey = {
  kty: "RSA",
  n: "yxuKRrj2yhILUGVzGhBgZNRuvmDhw0FdgHijE19kzwLvMz-D_I6nhYgUafbxDIRZs5l9J_kVswi6lGvqjKoRVM6K1gBq3p_jyesRyZx6suxBGrPoDX7h0GMtCzFRn_snac8cb96Lt0d5HEoQBTrIbxL5zoLqqteFvuesc70jh4ONafm7EimYTBthSEkykP4O5olUszi1p7sjheu1t-rilSnYnno6EaKiuNEbswUTjDJFJY2cU_-OQFwmH7wi1KWdgLgj4GjCEY2WwkminHKhu4qUGGYQs9VNv0Ukvgl0d2RB_8rFVJwUFrwOu8W2p-Y73IpxmkYPUTn9VVBQbCqVlP0U6Wz7hK4m5gh3UCJdWUm-GdtXAV6NsnyvKBwIZ1RlLC3Fo6SufEXZX0UoW9IIGBKnTj6_HNVF9m_zbeS47UYzJRuufnq3vnsAaRECFhiuZhYJ8z25zwM_77L4trsYgRSopgzOzQbtvMUVCmtF2hi0X2mgQ7LjsT8bowQDRvkvlC_2OiG8g_XxF19jdenMvOfJ52zc1WjLlfqG042f6yuvZtvHzKh64EDmFu6PypF1aw5RPm0MOWrlM07GYo8CtXw_Lwix0B3i6JZypbFe6KXhYUK8mpRHroX81CUKj8iskpfUuLJ3Nd-ScbmvSk7lsmv2tvCUJyd59qRAtJSzzbc",
  e: "AQAB",
  d: "GctGlVK6LNF71Fr98ipwQ33jDpR5N3XerQklFLnBsLSbsjN3zKRFTCULCqYM2N0aE0AD8AanJdSO9Xh7EiArEU0lvqXQ7LL7l9IdsTAJOR3d6sk8SDJ79R4TQ1-hESMxTzO5Vc-6iK0wCVKylCdx-wE67mob6VRzrNn5Qb2cfIJNfE713gmgSNIVWbvKCzXoqIh6VER4dXPDwCc-LbxLyEvHMeEt7L1t0vDjhqm3YM-ljm5ckyJaa3wIb3FSLxVVWlqIW-CR_O6xXb1CRIIeXhXsVujnaB9Hv2nFj8jdnKgD5btXsjYcKwL5EAm897e6lHiUktYg7dziemo3vHTwCADbV0-TPJEZKR_rIasongcdSbq5xhVdDyK0AxOkDxfU8doAr_HoqhfnisUKBQ1RTOppjE27TI1hPyrddUpjx76rVfTiwjqtGVyvQBWpueniRjXnxikdktg_FKeETFUB5F3fcSjk3URkNtY24Hmm3NNgyV3HYmueKrercmFk5evRhladp8G6x87P7JBqlDrbZ9s6lKBReYSus9ecLem9k44zNn5VUwevDnEwUuJ1xqUdEt-loFv2mC_dQ0fbow5J3OWvfHa3UTrLj8BoN7c14A5fZqVRvRG6w2B4eWZaRqB_sZZqAJtj_JaiIpisWKu8tD1LjGijbwQVMD_0krYiEsk",
  p: "73ivBvdrXZJDBFfJrvYtk6upOc2yxrZgCkV435AG_67OiNJi9vsgEO3aRGFI4AofjffaYuXid_rOlQSy07PBq8uCnQsKsan7SdcTqifuajwFhx7b-EciM3HfOiCFqSTJeDFiP70oCF1HBMVX4_RvztZNT4o0tyjdZ0gpzi8EscW-afGKCLxNTbRbpsrTOpvQWzAFodjSyRgQCfqDOyuIWkduHM3C3iOs8DEud1YOA-8iktmqfBLU6o0Ntc6cqR85GEnPAI9ADaLmhObgmUTlkmS2pFGvdcb31QMa4d8UxqxMcIFiwfzzQiKbNNw9eBby3f9SmCs77P150xoU2Pjy8w",
  q: "2SBURMfHHmRHM1wZxfrVuD8DaI6KsLhVUJMHvPFbMpm1fb9tQm2hpB80B5zHXLZEMTGJmJ-b-Eo_MntSRza_kRUnJdFXA1xwzDHEt9gbc6GmSA1Sm2zVDIYX5asS-rElJe4NQawbX-YlJtZGFwJ5oSPmSPBAKl8wTpvkWIQIL4ApH62xQS9pJNDiOETUl2VAn1mh-RaX24TgsoId4ZaEuGgqZ1JVbKYPeXfplGUKb5Mj80EygxuHjS_45vkZKZ7b2MwANsVl4_7YdChTNt9ROZUOn0Rd1SZXy5X6oPYdog57TOTSMK6sOCioFHd4-23UgDlYtojbP8U4aA5GFRbDLQ",
  dp: "bpWUfesTsYoxWHgRsrIMKf1DkGXlAM6HWzbpspOYJ8pZpeVBvjwJesfb22fxd0Q1fiHOv4zZH_66FyasTgbckLDSCCNpNNICMP8ZHaKC_pvpEZS2j9iJeqhDJVyPXKSYRODJNhXrvrEUcqePBr2CREnCOdDgtxQv6dnxND2SNWXToKjhzVbne9Kl4EgZcx8xAGsUrsCp1iM-hN0ibNiVhtslhjeenWZsHh8YDhO3NSnhFV9e0xz_JbEte5-FyLOachTjeqasNZ_cQ9M6NI0UVp4bmZX_KKxRFhTw_Q0_Ut-ODQYyzNI6o3fHpIlv-VzfmpSlV4_fhHkpIMsShX-w8Q",
  dq: "TefutJsmE_6RGZmTWdkttCVP-MUkeFI7smR_I0lKmrZSS6NS9cHWfMgBaDXVxqtTfn8yysOCOC2TzW44UHsRc2IuoMAjQ354rpuw5PIyr2OyASpemIwNSagXjP28Gp1TIe_va7_wNpGihPPfRERMFgiGiWdC7rEm6R3Aag49zaVjnA07i5MSW_ZjJSN1UDkxXbvQhUqZBFgCM6rCQ_448t3VUStWoVxYMxJWijtS6kPWY2LiV-6ZzYwH-AArCicI5RoVfZGIhK0dR1hsu0SXpVyZWYYzUNaoK9FNk1GbwlkF3so_rN4Pxzq3TFit3TFETRnGfgBPAuul2Jg-hzSapQ",
  qi: "XOKgr9pXWWFZTPZNVWHqh-G32KKOjVkhqU30Dttmm2gWte1X_V1n5ePYZudjKggJkPSWXiAi2I2mD2_ZJ020wZardRvnW8V1lfpBwXr4faXNV4iY4q5pi7f2_GsW_5uC5bv6J0utWJBbyYctsQcF6sWc1NVVsAU1AmG1Qj6JSJVpmCfN_2FTsUo3HUIIFDEVV4YBQgr5Y7Ie7AM26rYZl4e72Uzx4YY5GXpPIxZf6F4vyrFvoCi5kintlkTk4vIfT_AyetrC-eH5IpVKKgn-02EbJG6CqD7N50DvoSUiez7uZbJ-wbOeNdGu2hV6oxrXeYqkWafogcXvFHXXnFSMhQ",
};

uploadToArweave(
  {
    version: "2.0.0",
    metadata_id: 1234,
    description: trimify("Hola desde Ticklens"),
    content: trimify("Ticklens v1.1.1"),
    external_url: `https://lenster.xyz/u/0xVato`,
    image:
      "https://gateway.pinata.cloud/ipfs/bafkreiefgakk2cftozqhxafpla2fs75ux7iljt6mi6h25jyshrknvblkmm",
    imageMimeType: "image/svg+xml",
    name: "First Event from Ticklens",
    // isAudioPost
    //   ? audioPublication.title
    //   : `Post by @${currentProfile?.handle}`,
    tags: ["event", "ticklens"],
    animation_url: "", // getAnimationUrl(),
    mainContentFocus: "IMAGE", // getMainContentFocus(),
    contentWarning: null, // TODO
    attributes,
    // media: attachments,
    locale: "es-419", //getUserLocale(),
    createdOn: new Date(),
    appId: "ticklens-007", // APP_NAME,
  },
  aKey
);
