# Security

## Data handling

Linear Command Center communicates directly with `https://api.linear.app/graphql`. It does not use a custom backend, telemetry service, analytics provider, or local file storage.

OAuth credentials are created and stored by Raycast's OAuth utilities. The extension reads the active access token only when making an authenticated Linear request and never logs or persists it itself.

## Reporting a vulnerability

Please use GitHub's private vulnerability-reporting feature for this repository. Do not include access tokens, private issue content, or other sensitive workspace data in a public issue.
