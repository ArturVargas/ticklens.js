import { createClient } from "@urql/core";

const env = {
  testnet: "https://api-mumbai.lens.dev/playground",
  mainnet: "https://api.lens.dev",
};

export const client = createClient({
  url: env.testnet,
});
