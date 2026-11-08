import { site } from "@jrk/content";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { NotesPreview } from "@/components/home/NotesPreview";
import { Receipt } from "@/components/home/Receipt";
import { RulesLog } from "@/components/home/RulesLog";
import { Skills } from "@/components/home/Skills";
import { TurnReplay } from "@/components/home/TurnReplay";
import { WorkIndex } from "@/components/home/WorkIndex";
import { person, Seo, website } from "@/components/Seo";

export const Route = createFileRoute("/")({
  component: Home,
});

// The home page is the short version: the work, the skills I've published,
// one system taken apart, five rules, the numbers and the notes. The rest of the rules
// and the repo shape live on /thinking; the path, the toolbox and the earlier projects on /about.
const FEATURED_RULES = ["unmeasured", "authority", "measure", "position", "root-cause"];

function Home() {
  return (
    <main>
      <Seo
        title={`${site.name} · ${site.role}`}
        description={site.description}
        path="/"
        type="profile"
        kind="ProfilePage"
        graph={[website, person]}
      />
      <Hero />
      <WorkIndex />
      <Skills n="02" />
      <TurnReplay n="03" />
      <RulesLog n="04" ids={FEATURED_RULES} />
      <Receipt n="05" />
      <NotesPreview n="06" />
    </main>
  );
}
