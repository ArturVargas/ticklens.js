export const VALIDATE_METADATA = `
query($request) {
  validatePublicationMetadata(request: $request) {
    valid
    reason
  }
}
`;
