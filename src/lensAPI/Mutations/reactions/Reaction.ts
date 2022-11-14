import "isomorphic-unfetch";

export const ADD_REACTION = `
mutation($request: ReactionRequest!) {
  addReaction(request: $request)
}
`;

export const REMOVE_REACTION = `
mutation($request: ReactionRequest!) {
  removeReaction(request: $request)
}
`;
