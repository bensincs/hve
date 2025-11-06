---
id: copilot
title: GitHub Copilot
---

# GitHub Copilot in VS Code

GitHub Copilot is an AI-powered coding assistant deeply integrated into Visual Studio Code. It goes far beyond simple code completion - it's a comprehensive development companion that can understand your codebase, follow your team's conventions, and adapt to your specific workflow through powerful customization features.

## Core Capabilities

### 1. Inline Code Completions

Get intelligent code suggestions as you type, from single lines to complete function implementations. Copilot analyzes your current file, open tabs, and project context to provide relevant suggestions.

**Key Features:**
- **Multi-line completions**: Complete functions, classes, and complex logic blocks
- **Next edit predictions**: Suggests the next logical code change based on your editing pattern
- **Context-aware**: Uses file imports, types, and nearby code for better suggestions
- **Multiple suggestions**: Cycle through alternatives with `Alt+]` and `Alt+[`

### 2. Agent Mode (Autonomous Coding)

Agent mode transforms Copilot into an autonomous coding agent that can independently plan and execute complex, multi-step development tasks. It can read files, run terminal commands, install dependencies, and coordinate changes across your entire codebase.

**What Agent Mode Can Do:**
- Implement complete features from high-level descriptions
- Refactor entire codebases or migrate between frameworks
- Debug issues by reading logs, analyzing code, and applying fixes
- Set up new projects with proper configuration and dependencies
- Run tests, analyze failures, and implement fixes

**How to Use:**
1. Open Chat view (`⌃⌘I` or `Ctrl+Alt+I`)
2. Select **Agent** from the chat mode dropdown
3. Describe your task: "Implement user authentication with JWT tokens"
4. Agent mode will create a plan, execute it, and iterate until complete

### 3. Chat Interfaces

**Chat View (`⌃⌘I`)**: Persistent sidebar for ongoing conversations
- Ask questions about your codebase
- Request multi-file changes
- Review and accept code suggestions
- Switch between different chat modes

**Inline Chat (`⌘I`)**: Quick edits without leaving your code
- Select code and ask for changes
- Preview diffs before accepting
- Perfect for refactoring and quick fixes

### 4. Smart Actions

AI-enhanced actions integrated throughout VS Code:

- **Fix with Copilot**: Click lightbulb on errors for AI fixes
- **Explain This**: Right-click any code for detailed explanations
- **Generate Tests**: Auto-create unit tests for functions/classes
- **Generate Docs**: Create documentation from code
- **Semantic Search**: Find code by describing what it does, not just keywords
- **Commit Message Generation**: Auto-write descriptive commit messages
- **PR Description Generation**: Create comprehensive pull request descriptions
- **Smart Rename**: Rename symbols with context-aware suggestions

## Advanced Customization

### Custom Instructions

Instructions are persistent rules that shape how Copilot generates code. They ensure consistency across your team and enforce your coding standards.

**Organization Options:**

1. **Single file**: `.github/copilot-instructions.md` - Automatically applies to all chat requests in the workspace
2. **Multiple files**: `*.instructions.md` - Created for specific tasks or file patterns, stored in `.github/instructions/` folder

**Complete Setup Example:**

```
project/
├── .github/
│   ├── copilot-instructions.md         # Single file option (applies to all)
│   ├── instructions/
│   │   ├── general.instructions.md              # Project-wide standards
│   │   ├── api-guidelines.instructions.md       # API-specific rules
│   │   ├── component-standards.instructions.md  # UI component rules
│   │   └── testing-conventions.instructions.md  # Testing practices
│   ├── prompts/
│   │   └── create-api-endpoint.prompt.md
│   └── chatmodes/
│       └── architect.chatmode.json
└── .vscode/
    └── mcp.json
```

**Example Instructions:**

`.github/instructions/general.instructions.md`:
```markdown
---
applyTo: "**"
---

# Project Coding Standards

- Use TypeScript strict mode for all files
- Prefer functional components with hooks over class components
- Always include error handling in async functions
- Write descriptive variable names
- Add JSDoc comments to all public functions
- Every component must have a test file
```

`.github/instructions/api-guidelines.instructions.md`:
```markdown
---
applyTo: "src/api/**/*.ts"
---

# API Layer Standards

- All endpoints must validate input with Zod schemas
- Use proper HTTP status codes (200, 201, 400, 401, 403, 404, 500)
- Implement rate limiting on all public endpoints
- Log all errors with request context
- Return consistent error response format
```

**Key Features:**
- Use `applyTo` frontmatter to target specific file patterns (e.g., `"**/*.py"`, `"src/api/**/*.ts"`)
- Instructions automatically apply based on the file you're working on
- Copilot merges all applicable instructions for context
- Workspace files in `.github/instructions/` apply only to that workspace
- User profile instructions apply across all your workspaces
- Share via version control for team consistency

### Custom Prompts (`.prompt.md` files)

Prompts are reusable, executable instructions for specific tasks. They show up as `/` commands in Copilot Chat, making complex workflows simple and repeatable.

**Creating a Custom Prompt:**

`.github/prompts/create-api-endpoint.prompt.md`:
```markdown
---
title: Create API Endpoint
description: Generate a complete REST API endpoint with validation, error handling, and tests
---

Create a new API endpoint with the following requirements:

1. **Endpoint Details**: Ask the user for:
   - HTTP method (GET, POST, PUT, DELETE)
   - Route path
   - Request body schema (if applicable)
   - Response schema

2. **Implementation Requirements**:
   - Create endpoint handler in `src/api/endpoints/`
   - Add Zod schema for request validation in `src/api/schemas/`
   - Implement business logic in appropriate service file
   - Add route registration in `src/api/routes.ts`
   - Include proper error handling
   - Add TypeScript types

3. **Testing**:
   - Create integration test in `src/api/__tests__/`
   - Test success cases
   - Test validation errors
   - Test authentication/authorization if required

4. **Documentation**:
   - Add JSDoc comments
   - Update API documentation in `docs/api/`
   - Include example request/response

Follow project coding standards from copilot-instructions.md.
```

**Using Custom Prompts:**

In Copilot Chat, type `/` to see all available prompts:
```
/create-api-endpoint
/create-react-component
/add-database-migration
/generate-test-suite
```

### Custom Chat Modes (`.chatmode.json`)

Chat modes define specialized AI personas with specific capabilities, tools, and contexts. They let you create focused environments for different types of work.

**Creating a Chat Mode:**

`.github/chatmodes/architect.chatmode.json`:
```json
{
  "name": "architect",
  "description": "Senior architect focused on system design and architecture decisions",
  "instructions": "You are a senior software architect. Focus on high-level design, scalability, maintainability, and best practices. When discussing solutions, consider trade-offs and explain architectural decisions.",
  "tools": ["readFile", "listFiles", "searchFiles"],
  "context": {
    "includePatterns": ["**/*.md", "**/*.json", "**/README*"],
    "excludePatterns": ["**/node_modules/**", "**/dist/**"]
  }
}
```

`.github/chatmodes/security-reviewer.chatmode.json`:
```json
{
  "name": "security-reviewer",
  "description": "Security expert for code review and vulnerability assessment",
  "instructions": "You are a security expert. Review code for vulnerabilities, security best practices, and potential attack vectors. Focus on: SQL injection, XSS, CSRF, authentication, authorization, data exposure, and dependency vulnerabilities.",
  "tools": ["readFile", "searchFiles", "executeCommand"],
  "context": {
    "includePatterns": ["src/**/*.ts", "src/**/*.tsx"]
  }
}
```

**Using Chat Modes:**

Select from the chat mode dropdown in the Chat view to switch contexts:
- **Ask**: General questions and help
- **Edit**: Make changes to code
- **Agent**: Autonomous task execution
- **Architect**: (Custom) System design discussions
- **Security Reviewer**: (Custom) Security-focused reviews

### Language Model Selection

Choose the right model for each task:

**Fast Models** (GPT-4o, Claude 3.5 Sonnet):
- Code completions
- Quick questions
- Simple refactoring
- Fast iterations

**Reasoning Models** (o1, o1-mini):
- Complex algorithms
- Architectural decisions
- Debugging difficult issues
- Performance optimization

**Specialized Models**:
- **GitHub Models**: Direct access to various providers
- **Bring Your Own Key**: Connect Azure OpenAI, Anthropic, etc.
- **Local Models**: Use Ollama or LM Studio for offline work

Switch models via the model picker in Chat view or set defaults in settings.

### MCP Servers & Tool Extensions

Extend Copilot with external capabilities through Model Context Protocol (MCP) servers:

**Setting up MCP Servers:**

`.vscode/mcp.json`:
```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/"
    },
    "postgres": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "mcp-postgres"],
      "env": {
        "DATABASE_URL": "${input:database_url}"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/docs"]
    }
  }
}
```

**Popular MCP Servers:**
- **GitHub MCP**: Repository management, issues, PRs, actions
- **Database MCP**: Query databases directly from chat
- **Filesystem MCP**: Access external documentation
- **REST API MCP**: Connect to external APIs
- **Brave Search MCP**: Web search capabilities

**Using MCP Tools in Agent Mode:**

When enabled, agent mode can automatically use MCP tools:
```
"Create a new GitHub issue for this bug and link it to the current PR"
→ Agent uses GitHub MCP to create issue and update PR

"Query the database for users created in the last 30 days"
→ Agent uses Postgres MCP to run SQL query
```

## Advanced Features

### Inline Prompt Variables

Use variables in chat for dynamic prompts:

- `#file`: Reference specific files
- `#selection`: Current selection
- `#editor`: Active editor content
- `#terminalLastCommand`: Last terminal command
- `#terminalSelection`: Selected terminal text

Example:
```
"Explain #selection in the context of #file:src/auth/login.ts"
```

## Best Practices

### Writing Effective Instructions

**Do:**
- Be specific and actionable
- Provide concrete examples
- Explain the "why" behind rules
- Use `applyTo` patterns to target specific files

**Don't:**
- Write vague guidelines like "write good code"
- Create conflicting rules across instruction files
- Include too many unrelated concerns in one file

### Optimizing Prompts

**Do:**
- Start with the task goal
- List specific requirements
- Include success criteria
- Reference project standards

**Don't:**
- Write overly long prompts (keep under 500 words)
- Assume context - be explicit
- Mix multiple unrelated tasks

### Team Collaboration

Share customizations via version control:
1. Commit `.instructions.md` files to `.github/instructions/` folder
2. Use `.github/copilot-instructions.md` for simple project-wide instructions
3. Document available prompts in team README
4. Create chat modes for common workflows
5. Share MCP server configurations by committing `.vscode/mcp.json`

## External Documentation

- [Official VS Code Copilot Docs](https://code.visualstudio.com/docs/copilot/overview)
- [Copilot Customization Guide](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [Custom Instructions Reference](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [Custom Prompts Guide](https://code.visualstudio.com/docs/copilot/customization/custom-prompts)
- [Chat Modes Documentation](https://code.visualstudio.com/docs/copilot/chat/chat-modes)
- [MCP Servers in VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
- [GitHub Copilot Trust Center](https://copilot.github.trust.page/faq)
