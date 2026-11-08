import type { PathEntry, Provenance } from "./types.ts";

/** The path so far, newest first, drawn like `git log --graph`. */
export const path: PathEntry[] = [
  { hash: "2026-10", date: "Oct 2026", branch: "netision", kind: "commit", title: "The tool server reached 69 tools and 20 per-user connectors", detail: "Across eight providers. I wrote 19 of the connectors, Dynamics 365 and Odoo last, both read-only; a teammate wrote Salesforce." },
  { hash: "2026-10", date: "Oct 2026", branch: "netision", kind: "commit", title: "Shipped skills people write, share, and the model loads on its own", detail: "A skill shapes the answer, never what the user asked for. Then a public repo of my own, MIT licensed and installable as a plugin." },
  { hash: "2026-10", date: "Oct 2026", branch: "netision", kind: "commit", title: "Self-hosted a 34B open model on one GPU to answer “should we?” with numbers", detail: "Tool use went from 1/8 to 8/8 after rewriting its chat template, and fell to 39/60 at 35 tools. The lever is a stronger tool-caller, not the template." },
  { hash: "2026-07", date: "Jul 2026", branch: "netision", kind: "commit", title: "Pulled four drifting copies of the model config into one library", detail: "Published by tag, never deployed. 101 releases by the end of October." },
  { hash: "2026-04", date: "Apr 2026", branch: "netision", kind: "commit", title: "Wrote an observability platform's backends in Go and Python", detail: "Agents, a collector, a probe and a control plane, with exactly one process allowed out of the datacenter." },
  { hash: "2026-02", date: "Feb 2026", branch: "netision", kind: "commit", title: "First MCP server at work", detail: "Three architectures in eight months; it's now the tool layer for the whole platform." },
  { hash: "2025-07", date: "Jul 2025", branch: "netision", kind: "commit", title: "First commit on the analytics agents", detail: "Text-to-SQL over a read-only warehouse, then a root-cause agent. Peak month: 186 commits." },
  { hash: "2025-05", date: "May 2025", branch: "netision", kind: "merge", title: "AI Engineer, Netision Technology, Noida", detail: "Full-time. Agent runtimes, tool servers, LLM infrastructure." },
  { hash: "2024-12", date: "Dec 2024", branch: "internships", kind: "commit", title: "AI software trainee, Coginetics", detail: "Where I moved from web development to agents: LangChain, CrewAI, the OpenAI API." },
  { hash: "2024-08", date: "Aug 2024", branch: "main", kind: "commit", title: "Built a certificate generator and a mass mailer", detail: "A spreadsheet and a template in; certificates and emails out. The first thing I automated." },
  { hash: "2024-07", date: "Jul 2024", branch: "internships", kind: "branch", title: "Web development intern, Tech Freedom Online", detail: "Remote. Front end and back end." },
  { hash: "2022-09", date: "2022 – 25", branch: "main", kind: "commit", title: "BCA in Data Science, Bennett University", detail: "Graduated 9.6/10. First semester: a perfect 10. Also ran photography and multimedia for a few student societies." },
];

export interface ReceiptLine {
  label: string;
  value: string;
  source: Provenance | "public";
}

/** The receipt. Every line has a source; most live in private repos, so ask me about any of them. */
export const receipt: { lines: ReceiptLine[]; footer: ReceiptLine[] } = {
  lines: [
    { label: "GitHub contributions, 2026", value: "1,292", source: "public" },
    { label: "library releases, Jul–Oct", value: "101", source: "count" },
    { label: "models behind one interface", value: "17", source: "count" },
    { label: "first-party MCP tools", value: "69", source: "count" },
    { label: "test modules, query backend", value: "67", source: "count" },
    { label: "spreadsheet eval", value: "2/8 → 6/8", source: "eval" },
    { label: "guardrail blocks", value: "3/12 → 0/12", source: "measured" },
    { label: "root-cause turn", value: "77.8 s → 12 s", source: "measured" },
    { label: "pricing rewrite, golden cases", value: "308/308", source: "commit" },
  ],
  footer: [
    { label: "tokens estimated", value: "0", source: "doc" },
    { label: "unmeasured spend", value: "flagged", source: "doc" },
  ],
};

export const provenanceNote: Record<Provenance | "public", string> = {
  measured: "measured: run on the real system, from my commit or doc",
  eval: "eval: a fixed set of graded questions, same model and prompt",
  count: "count: counted from the code or git history",
  commit: "commit: stated in the commit that made the change",
  doc: "doc: a rule written in the design doc",
  public: "public: visible on my GitHub profile",
};

/** The skills, as `tree` would print them, each line with where it's in use. */
export const toolbox: { dir: string; items: string[]; where: { label: string; href: string }[] }[] = [
  {
    dir: "agents",
    items: ["MCP (client & server)", "tool-calling loops", "agent skills", "evals", "LangGraph", "LangChain", "CrewAI"],
    where: [
      { label: "query backend", href: "/work/query-backend" },
      { label: "tool server", href: "/work/tool-server" },
      { label: "my public skills", href: "https://github.com/Jrkesari/skills" },
    ],
  },
  {
    dir: "models",
    items: ["Azure OpenAI", "Anthropic", "Gemini", "NVIDIA NIM", "vLLM", "prompt caching", "structured outputs", "vision"],
    where: [{ label: "LLM library", href: "/work/llm-library" }],
  },
  {
    dir: "backend",
    items: ["Python", "FastAPI", "asyncio", "Pydantic", "Go", "gRPC"],
    where: [
      { label: "query backend", href: "/work/query-backend" },
      { label: "observability", href: "/work/observability" },
    ],
  },
  {
    dir: "data",
    items: ["RAG", "text-to-SQL", "DuckDB", "SQLite + sqlite-vec", "ClickHouse", "Redpanda", "FAISS", "pandas"],
    where: [
      { label: "analytics agents", href: "/work/analytics-agents" },
      { label: "LLM library", href: "/work/llm-library" },
    ],
  },
  {
    dir: "platform",
    items: ["Docker", "Azure", "Microsoft Graph", "OpenTelemetry", "GitHub Actions", "pytest", "uv"],
    where: [
      { label: "tool server", href: "/work/tool-server" },
      { label: "observability", href: "/work/observability" },
    ],
  },
  {
    dir: "front",
    items: ["TypeScript", "React", "TanStack", "Tailwind"],
    where: [{ label: "this site", href: "/colophon" }],
  },
];

export const now = {
  updated: "2026-10-31",
  doing: [
    "Skills in the product: people write their own, share them with a colleague or the whole org, and the model loads one when a task calls for it. The rule that holds it together is that a skill shapes the answer, never what the user asked for.",
    "My own skills, in public: [Jrkesari/skills](https://github.com/Jrkesari/skills), MIT licensed and installable as a plugin in Claude Code or Codex. A video editor that cuts your clips and photos on the beats of your song, in any aspect ratio, and an Android TV fixer that diagnoses before it changes anything and logs an undo for every change.",
    "Skills for the agent I code with: eight in the backend repo now. The newest is a white-box security audit. It started in my public repo and moved into the repo it audits, since it describes that code too closely to be public.",
    "Two more read-only connectors, Dynamics 365 and Odoo. Odoo goes through each database's own MCP server instead of one I wrote. It hasn't met a deployed stack yet, so I'm not calling it done.",
    "A deck tool that plans, writes, checks and delivers a native presentation. The chat's cited sources reach it from code, not from the model, so footnote 3 on a slide is source 3 in the chat.",
    "Dependency hygiene across three repos: a known-vulnerable dependency now fails the build, the advisory scan runs daily instead of only on a push, and this week's major upgrades (the HTTP client, DuckDB 2.0, the Anthropic SDK) went in behind it.",
  ],
  thinking: [
    "What it takes for an agent to be trusted with someone's mailbox. (Mostly: the agent never holds the keys.)",
    "How to test a skill. Loading when it should and behaving once loaded are separate tests, and passing one says nothing about the other: a trigger check per model for the first, graded eval cases for the second.",
    "Whether tool calling degrades with the number of tools as sharply on other models as it did on the one I measured.",
  ],
  offline: [
    "Photography: a Nikon D5600 and an Insta360 X3. At university I ran photography and multimedia for a few student societies.",
  ],
};

export const uses = [
  {
    group: "Editor & agents",
    items: [
      { name: "VS Code", note: "with Claude Code alongside" },
      { name: "Claude Code", note: "with project skills I wrote: a release gate, a root-cause checklist, a token audit, a dependency audit, a security audit; and [public ones](https://github.com/Jrkesari/skills) anyone can install" },
      { name: "CLAUDE.md as a decision log", note: "each rule written next to the incident that produced it" },
    ],
  },
  {
    group: "Python",
    items: [
      { name: "uv", note: "locks, pinned in CI" },
      { name: "pytest + xdist", note: "tests named as behaviours; no network, no real model" },
      { name: "FastAPI · asyncio · Pydantic", note: "`extra=\"forbid\"` on skills, knowledge packs and config" },
      { name: "DuckDB · SQLite · sqlite-vec", note: "local first, ClickHouse when it has to be shared" },
    ],
  },
  {
    group: "Everything else",
    items: [
      { name: "Go", note: "for things that run on someone else's machine" },
      { name: "pnpm + Turborepo", note: "this site, and the product's frontend" },
      { name: "GitHub Actions", note: "actions pinned to commit SHAs, an OSV audit on every PR" },
      { name: "Docker", note: "and build secrets mounted, never baked into a layer" },
    ],
  },
  {
    group: "Off the keyboard",
    items: [
      { name: "Nikon D5600", note: "stills" },
      { name: "Insta360 X3", note: "everything else" },
    ],
  },
];
