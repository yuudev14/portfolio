import { Badge } from "@/components/ui/badge";
import { PromptLabel } from "@/components/terminal/prompt-label";
import { Reveal } from "@/components/terminal/reveal";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { skills } from "@/data/skills";
import { techIcons } from "@/lib/tech-icons";
import type { SkillCategory } from "@/types";

const categories: { category: SkillCategory; dir: string }[] = [
  { category: "languages", dir: "languages" },
  { category: "backend", dir: "backend" },
  { category: "frontend", dir: "frontend" },
  { category: "database", dir: "database" },
  { category: "infrastructure", dir: "infrastructure" },
];

function SkillGroup({ category, dir }: { category: SkillCategory; dir: string }) {
  const entries = skills.filter((skill) => skill.category === category);

  return (
    <div>
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">$</span> ls -la ~/skills/{dir}
      </p>
      <p className="mb-3 mt-1 font-mono text-xs text-muted-foreground">
        total {entries.length}
      </p>
      <Reveal stagger className="flex flex-wrap gap-2">
        {entries.map((skill) => {
          const Icon = techIcons[skill.name];
          return (
            <Badge key={skill.name} variant="secondary" className="gap-1.5 py-1.5">
              {Icon && <Icon className="size-3.5" />}
              {skill.label}
            </Badge>
          );
        })}
      </Reveal>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex min-h-screen w-full max-w-5xl scroll-mt-14 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <Reveal>
        <PromptLabel path="~/skills">Skills</PromptLabel>
        <div className="mt-8">
          <TerminalWindow title="yu@portfolio: ~/skills">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map(({ category, dir }) => (
                <SkillGroup key={category} category={category} dir={dir} />
              ))}
            </div>
          </TerminalWindow>
        </div>
      </Reveal>
    </section>
  );
}
