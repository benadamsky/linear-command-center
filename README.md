# Linear Command Center

Linear Command Center turns assigned Linear work into an actionable menu-bar pulse. It emphasizes exceptions—agent sessions waiting for input, blocked or overdue work, review queues, and stale active issues—so you can stay oriented without keeping Linear open.

## Commands

- **Linear Pulse** shows work needing attention, reviews, active agent sessions, and active issues in the menu bar. It refreshes every 15 minutes.
- **Linear Work Dashboard** provides a searchable queue with actions to open work, follow agent-session links, change status, and add progress notes.
- **Quick Capture Linear Issue** creates an issue with a selected team, workflow status, project, and priority.

## Configuration

- **Preferred Team Key** optionally limits the dashboard to one team and preselects that team in Quick Capture. Leave it blank to include assigned work across teams.
- **Agent Project ID** optionally identifies one exact Linear project as agent-managed.
- **Agent Project Keywords** recognizes agent work by project-name keywords. Linear delegation, agent labels, and active agent sessions are always recognized automatically.
- **Review Status Names** optionally supplies custom review statuses. When blank, statuses containing `review` are detected automatically.
- **Stale After** controls how many hours a started issue can go without an update before it needs attention.
- **Menu Items per Section** limits each menu-bar section while leaving the full dashboard searchable.
- **Demo Data** replaces workspace content with sanitized sample issues for previews and screenshots. Keep it disabled for normal use.

## Permissions and privacy

The extension requests Linear `read write` OAuth access because its explicit actions can create issues, change workflow states, and add comments. Authentication uses Raycast's Linear OAuth integration and PKCE flow. Tokens are managed by Raycast and are never written to this repository or logged by the extension.

Linear data is sent only to Linear's GraphQL API. The extension has no analytics, advertising, telemetry, custom backend, or file-system access.

Agent-session and external links are opened only after a user selects an action, and only `https` or `http` links are accepted.

## Development

Requires Node.js 22 and npm.

```bash
npm install
npm run dev
npm test
npm run typecheck
npm run lint
npm run build
```

## License

MIT
