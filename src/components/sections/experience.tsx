import { Badge } from "@/components/ui/badge";
import { PromptLabel } from "@/components/terminal/prompt-label";
import { Reveal } from "@/components/terminal/reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto flex min-h-screen w-full max-w-5xl scroll-mt-14 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <Reveal>
        <PromptLabel path="~/experience">
          <span className="hidden sm:inline">git log --oneline --graph</span>
          <span className="sm:hidden">Experience</span>
        </PromptLabel>
      </Reveal>

      <Reveal
        stagger
        className="mt-10 space-y-10 border-l border-border pl-6 sm:pl-8"
      >
        {experience.map((entry) => (
          <div key={`${entry.organization}-${entry.role}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[29px] top-1.5 size-3 rounded-full ring-4 ring-background sm:-left-[37px]"
              style={{ backgroundColor: entry.color }}
            />
            <p className="font-mono text-xs text-muted-foreground">
              {entry.date} · {entry.location}
            </p>
            <h3 className="font-heading mt-1 text-lg font-medium text-foreground">
              {entry.role}{" "}
              <span className="text-muted-foreground">@ {entry.organization}</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{entry.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="font-mono text-[0.7rem]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
