import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  runbookSidebar: [
    {
      type: "category",
      label: "The Basics",
      items: [
        {
          type: "doc",
          id: "basics/overview",
          label: "Overview",
        },
      ],
    },
    {
      type: "category",
      label: "Tools",
      items: [
        {
          type: "doc",
          id: "tools/overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "tools/copilot",
          label: "GitHub Copilot",
        },
        {
          type: "doc",
          id: "tools/github-mcp-server",
          label: "GitHub MCP Server",
        },
        {
          type: "doc",
          id: "tools/speckit",
          label: "Spec Kit",
        },
      ],
    },
  ],
};

export default sidebars;
