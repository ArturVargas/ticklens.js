import "isomorphic-unfetch";

export const AUTHENTICATION = `
mutation($request: SignedAuthChallenge!) { 
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
`;

export const REFRESH_TOKEN = `
mutation($request: RefreshRequest!){
  refresh(request: $request) {
    accessToken
    refreshToken
  }
}
`;
