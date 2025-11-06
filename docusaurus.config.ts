import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "The HVE Runbook",
  tagline: "The playbook for high-velocity experiments",
  favicon: "img/favicon.ico",

  url: "https://hve.run",
  baseUrl: "/",

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "The HVE Runbook",
      items: [
        {
          type: "docSidebar",
          sidebarId: "runbookSidebar",
          position: "left",
          label: "Runbook",
        },
        { to: "/blog", label: "Field Notes", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} hve.run.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
