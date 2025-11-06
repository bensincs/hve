---
id: speckit
title: Spec Kit
---

# Spec Kit

Spec Kit is an open-source toolkit for spec-driven development that allows you to focus on product scenarios and predictable outcomes instead of vibe coding every piece from scratch.

## What is Spec-Driven Development?

Spec-Driven Development flips traditional software development on its head. Instead of specifications being just scaffolding that gets discarded once coding begins, specifications become **executable** - directly generating working implementations.

## Key Features

- **Intent-driven development**: Define the "what" before the "how"
- **Rich specification creation**: Use guardrails and organizational principles
- **Multi-step refinement**: Move beyond one-shot code generation
- **AI-powered**: Leverages advanced AI models for interpretation

## Installation

### Option 1: Persistent Installation (Recommended)

```bash
# Install once and use everywhere
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git

# Use the tool
specify init <PROJECT_NAME>
specify check
```

### Option 2: One-time Usage

```bash
# Run directly without installing
uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT_NAME>
```

## Quick Start

### 1. Initialize Project

```bash
# With Claude
specify init my-project --ai claude

# With GitHub Copilot
specify init my-project --ai copilot

# In current directory
specify init . --ai copilot
```

### 2. Create Project Constitution

```
/speckit.constitution Create principles focused on code quality, testing
standards, and user experience
```

### 3. Specify What to Build

```
/speckit.specify Build an application that can help me organize my photos
in separate albums...
```

### 4. Create Technical Plan

```
/speckit.plan The application uses Vite with minimal libraries. Use vanilla
HTML, CSS, and JavaScript...
```

### 5. Break Down into Tasks

```
/speckit.tasks
```

### 6. Execute Implementation

```
/speckit.implement
```

## Available Slash Commands

### Core Commands

- `/speckit.constitution` - Create project governing principles
- `/speckit.specify` - Define requirements and user stories
- `/speckit.plan` - Create technical implementation plans
- `/speckit.tasks` - Generate actionable task lists
- `/speckit.implement` - Execute all tasks to build the feature

### Optional Commands

- `/speckit.clarify` - Clarify underspecified areas
- `/speckit.analyze` - Cross-artifact consistency analysis
- `/speckit.checklist` - Generate custom quality checklists

## Supported AI Agents

✅ Claude Code
✅ GitHub Copilot
✅ Gemini CLI
✅ Cursor
✅ Windsurf
✅ And more...

## External Documentation

- [Official Spec Kit Repository](https://github.com/github/spec-kit)
- [Complete Methodology Guide](https://github.com/github/spec-kit/blob/main/spec-driven.md)
- [Video Overview](https://www.youtube.com/watch?v=a9eR1xsfvHg)
- [Documentation](https://github.github.io/spec-kit/)
