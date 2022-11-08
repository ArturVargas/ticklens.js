import "isomorphic-unfetch";

export const CREATE_PROFILE = `
mutation($request: CreateProfileRequest!) {
  createProfile(request: $request) {
    ...on RelayerResult {
      txHash
    }
    ...on RelayError {
      reason
    }
    __typename
  }
}
`;
