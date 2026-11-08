import { toolbox } from "@jrk/content";
import { Link } from "@tanstack/react-router";
import { useInViewOnce } from "@/lib/hooks";
import { SectionHead } from "./SectionHead";

/** The skills, as `tree` prints a directory: one line per kind, and where each is in use. */
export function Toolbox({ n = "02" }: { n?: string }) {
  const [ref, seen] = useInViewOnce<HTMLDivElement>("0px 0px -15% 0px");
  const total = toolbox.reduce((n, d) => n + d.items.length, 0);

  return (
    <section id="skills" className="shell py-16 md:py-24" aria-labelledby="skills-title">
      <SectionHead
        n={n}
        id="skills-title"
        kicker="skills"
        title="Skills"
        lede="Not a list of everything I've touched. What I'd pick up tomorrow without looking anything up, and where each one is in use."
      />
      <div ref={ref} className="mt-12 rounded-[6px] border border-rule bg-card/60 p-5 sm:p-7">
        <p className="mono text-[12.5px] text-graphite">
          <span className="text-kesari">$</span> tree jayesh/ -L 1
        </p>
        <ul className="mono mt-3 text-[12.5px] leading-[2.05]">
          <li className="path-row text-ink" data-seen={seen} style={{ ["--i" as string]: 0 }}>
            jayesh/
          </li>
          {toolbox.map((d, i) => (
            <li
              key={d.dir}
              className="path-row grid grid-cols-[2.2rem_minmax(0,1fr)] sm:grid-cols-[2.6rem_6.5rem_minmax(0,1fr)]"
              data-seen={seen}
              style={{ ["--i" as string]: i + 1 }}
            >
              <span
                aria-hidden
                className={`tree-stem text-faint max-sm:row-span-2 ${i === toolbox.length - 1 ? "is-last" : ""}`}
              >
                {i === toolbox.length - 1 ? "└──" : "├──"}
              </span>
              <span className="text-neel">{d.dir}/</span>
              <span className="pb-2 leading-[1.75] sm:pt-[0.15em]">
                <span className="text-ink-2">
                  {d.items.map((item, k) => (
                    <span key={item}>
                      <span className="whitespace-nowrap transition-colors hover:text-ink">{item}</span>
                      {k < d.items.length - 1 && <span className="text-faint"> · </span>}
                    </span>
                  ))}
                </span>
                <span className="block text-[11.5px] text-graphite">
                  <span aria-hidden className="text-faint">
                    ↳{" "}
                  </span>
                  <span className="sr-only">in use in </span>
                  {d.where.map((w, k) => (
                    <span key={w.href}>
                      {w.href.startsWith("http") ? (
                        <a className="link whitespace-nowrap" href={w.href} target="_blank" rel="noopener noreferrer">
                          {w.label}
                        </a>
                      ) : (
                        <Link className="link whitespace-nowrap" to={w.href}>
                          {w.label}
                        </Link>
                      )}
                      {k < d.where.length - 1 && <span className="text-faint"> · </span>}
                    </span>
                  ))}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <p
          className="mono path-row mt-4 text-[12px] text-graphite"
          data-seen={seen}
          style={{ ["--i" as string]: toolbox.length + 2 }}
        >
          {toolbox.length} directories, {total} skills
        </p>
      </div>
    </section>
  );
}
