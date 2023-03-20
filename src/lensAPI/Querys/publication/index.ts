export const VALIDATE_METADATA = `
query($request:ValidatePublicationMetadataRequest!) {
  validatePublicationMetadata(request: $request) {
    valid
    reason
  }
}
`;
