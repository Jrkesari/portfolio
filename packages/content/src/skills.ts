// My public Claude Code skills, from github.com/Jrkesari/skills. Each line here is
// something the skill's own SKILL.md or README says it does; check there before
// changing one.

export const skillsRepo = {
  href: "https://github.com/Jrkesari/skills",
  /** What `/plugin marketplace add` takes, and the marketplace's name in marketplace.json. */
  marketplace: "Jrkesari/skills",
  plugins: "jrkesari-skills",
};

export interface AgentSkill {
  /** The skill's folder, which is also its plugin name. */
  name: string;
  href: string;
  what: string;
  /** How it behaves, three lines. */
  how: string[];
  /** A request it answers, in a user's words. */
  ask: string;
  needs: string;
}

export const agentSkills: AgentSkill[] = [
  {
    name: "video-editor",
    href: "https://github.com/Jrkesari/skills/tree/main/video-editor",
    what: "Cuts your own clips and photos into one finished video, on the beats of a song you give it, in any aspect ratio.",
    how: [
      "Looks at every clip before it plans, then shows the cut as a table for you to confirm.",
      "The song is the clock: cuts land on its beats, and it's never stretched or pitched.",
      "Frames each ratio on purpose, never touches the originals, and offers to blur faces and number plates.",
    ],
    ask: "make a 30 second 9:16 reel from ~/Videos/goa cut to ~/Music/song.mp3",
    needs: "Python, ffmpeg, Node (HyperFrames)",
  },
  {
    name: "fix-android-tv-lag",
    href: "https://github.com/Jrkesari/skills/tree/main/fix-android-tv-lag",
    what: "Finds out why an Android TV or Google TV is slow or keeps restarting, and fixes what can be fixed over Wi-Fi.",
    how: [
      "Diagnoses read-only first: why each restart happened, memory pressure, and whether anything is damaged.",
      "Asks before removing anything you might use, and logs every change with its undo.",
      "Restarts and checks what held and helped. Three graded evals hold it to that.",
    ],
    ask: "my sony bravia keeps restarting by itself and is really laggy, can you check it?",
    needs: "Python, adb, USB debugging on the TV",
  },
];
