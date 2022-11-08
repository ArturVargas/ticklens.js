import "isomorphic-unfetch";

export const CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`;

export const VERIFY_TOKEN = `
  query($request: VerifyRequest!) {
    verify(request: $request)
  }
`;
