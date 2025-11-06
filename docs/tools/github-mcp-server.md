---
id: github-mcp-server
title: GitHub MCP Server
---

# GitHub MCP Server

The GitHub MCP Server connects AI tools directly to GitHub's platform, giving AI agents the ability to read repositories, manage issues and PRs, analyze code, and automate workflows through natural language.

## Key Features

- **Repository Management**: Browse code, search files, analyze commits, and understand project structure
- **Issue & PR Automation**: Create, update, and manage issues and pull requests
- **CI/CD Intelligence**: Monitor GitHub Actions, analyze build failures, and manage releases
- **Code Analysis**: Review security findings, Dependabot alerts, and code patterns
- **Team Collaboration**: Access discussions, manage notifications, and analyze team activity

## Installation

### Remote Server (Easiest)

For VS Code 1.101+, use the one-click install:

[Install in VS Code](https://insiders.vscode.dev/redirect/mcp/install?name=github&config=%7B%22type%22%3A%20%22http%22%2C%22url%22%3A%20%22https%3A%2F%2Fapi.githubcopilot.com%2Fmcp%2F%22%7D)

### Local Server (Docker)

```bash
# Add to your MCP settings
{
  "github": {
    "command": "docker",
    "args": [
      "run", "-i", "--rm",
      "-e", "GITHUB_PERSONAL_ACCESS_TOKEN",
      "ghcr.io/github/github-mcp-server"
    ],
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}"
    }
  }
}
```

## Configuration

### Read-Only Mode

```bash
# Run in read-only mode
github-mcp-server --read-only

# With Docker
docker run -e GITHUB_READ_ONLY=1 ghcr.io/github/github-mcp-server
```

## External Documentation

- [Official GitHub MCP Server Repository](https://github.com/github/github-mcp-server)
- [Installation Guides](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides)
- [Remote Server Documentation](https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md)
- [Tool Configuration](https://github.com/github/github-mcp-server#tool-configuration)
