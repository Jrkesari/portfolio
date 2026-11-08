import { site } from "./site.ts";

export const hero = {
  kicker: "AI engineer · Noida, India",
  lede: "I build the plumbing that lets language models do ==real work==: the **agent loop** that runs every question, the **tool server** it calls, the **switchboard** that picks a model, and the **ledger** that counts what each call cost.",
  sub: "Right now that's the LLM platform behind an enterprise AI workspace at Netision Technology. I write down why things are the way they are, mostly so I can't fool myself later.",
  links: [
    { label: "selected work", href: "#work" },
    { label: "skills", href: "#skills" },
    { label: "how I think", href: "#thinking" },
    { label: "github", href: site.socials[0].href },
    { label: "résumé", href: "/resume" },
  ],
};

export const profile = {
  tldr: {
    line: "AI engineer in Noida. I build the plumbing that lets language models do real work.",
    points: [
      "AI Engineer at Netision Technology since May 2025.",
      "Wrote the agent loop, tool server and LLM library behind an enterprise AI workspace.",
      "Published skills: a beat-synced video editor and an Android TV fixer, installable as plugins in Claude Code or Codex.",
      "Stack: Python, Go, TypeScript and SQL; MCP, tool-calling loops, RAG and evals.",
      "Every number I quote says where it came from.",
    ],
  },
};
