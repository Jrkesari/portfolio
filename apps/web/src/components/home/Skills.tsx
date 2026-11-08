import { type AgentSkill, agentSkills, skillsRepo } from "@jrk/content";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHead } from "./SectionHead";

/** My public Claude Code skills: what each does, how it behaves, and the two lines that install it. */
export function Skills({ n = "02" }: { n?: string }) {
  return (
    <section id="skills" className="shell py-16 md:py-24" aria-labelledby="skills-title">
      <SectionHead
        n={n}
        id="skills-title"
        kicker="skills"
        title="Skills"
        lede="Skills I wrote and published, MIT licensed. Install one as a plugin in Claude Code or Codex, then ask in your own words. They keep the rules I hold tools to at work: look before changing anything, ask about anything you might miss, leave a way back."
      />
      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {agentSkills.map((s) => (
          <SkillCard key={s.name} skill={s} />
        ))}
      </ul>
      <div className="reveal mt-8 grid gap-3 text-[0.98rem] text-ink-2 lg:grid-cols-2 lg:gap-6">
        <p>
          All of them in{" "}
          <a className="link" href={skillsRepo.href} target="_blank" rel="noopener noreferrer">
            {skillsRepo.marketplace}
          </a>
          . Codex reads the same marketplace:{" "}
          <code className="mono text-[12px] whitespace-nowrap">
            codex plugin marketplace add {skillsRepo.marketplace}
          </code>
        </p>
        <p>
          I write them at work too:{" "}
          <Link className="link" to="/work/$slug" params={{ slug: "query-backend" }}>
            skills in the product
          </Link>{" "}
          that people write and share, and{" "}
          <Link className="link" to="/thinking" hash="structure">
            eight project skills
          </Link>{" "}
          for the coding agent I work with.
        </p>
      </div>
    </section>
  );
}

function SkillCard({ skill: s }: { skill: AgentSkill }) {
  const install = `/plugin marketplace add ${skillsRepo.marketplace}\n/plugin install ${s.name}@${skillsRepo.plugins}`;
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(install).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2400);
      },
      () => {},
    );
  };

  return (
    <li className="reveal flex flex-col rounded-[6px] border border-rule bg-card/60 p-5 sm:p-7">
      <a className="link mono self-start text-[13px] text-neel" href={s.href} target="_blank" rel="noopener noreferrer">
        {s.name}/
      </a>
      <p className="mt-4 text-[1.12rem] leading-snug text-ink">{s.what}</p>
      <ul className="mt-4 space-y-2 text-[0.95rem] leading-[1.55] text-ink-2">
        {s.how.map((h) => (
          <li key={h} className="grid grid-cols-[1.2rem_minmax(0,1fr)]">
            <span aria-hidden className="mono text-faint">
              ↳
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <p className="mono mt-5 text-[11.5px] leading-[1.7] text-graphite">
        <span aria-hidden className="text-kesari">
          ›{" "}
        </span>
        <span className="sr-only">for example: </span>
        {s.ask}
      </p>
      <div className="mt-auto pt-6">
        <div className="rounded-[4px] border border-rule bg-paper/70 px-4 py-3">
          <div className="mono flex items-center justify-between gap-4 text-[11px] text-graphite">
            <span>install in claude code</span>
            <button type="button" onClick={copy} className="press link">
              {copied ? "copied" : "copy"}
              <span className="sr-only"> the install commands for {s.name}</span>
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? `Copied the install commands for ${s.name}` : ""}
            </span>
          </div>
          <pre className="mono mt-2 text-[11.5px] leading-[1.9] whitespace-pre-wrap text-ink-2 [overflow-wrap:anywhere]">
            <code>{install}</code>
          </pre>
        </div>
        <p className="mono mt-3 text-[11px] text-graphite">needs {s.needs}</p>
      </div>
    </li>
  );
}
