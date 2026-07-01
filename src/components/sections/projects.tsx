import Link from "next/link";
import { PromptLabel } from "@/components/terminal/prompt-label";
import { Reveal } from "@/components/terminal/reveal";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex min-h-screen w-full max-w-5xl scroll-mt-14 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <Reveal>
        <PromptLabel path="~/projects">Projects</PromptLabel>

        <div className="mt-8">
          <TerminalWindow title="yu@portfolio: ~/projects">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> ls ~/projects
            </p>
            {projects.length === 0 ? (
              <div className="mt-3 font-mono text-sm text-muted-foreground">
                <p>total 0</p>
                <p className="mt-2">
                  directory empty — new builds are in progress, check back soon.
                </p>
              </div>
            ) : (
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block rounded-md border border-border p-4 transition-colors hover:border-primary/60"
                    >
                      <p className="font-heading text-sm font-medium text-foreground">
                        {project.name}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {project.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </TerminalWindow>
        </div>
      </Reveal>
    </section>
  );
}
