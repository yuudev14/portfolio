import Image from "next/image";
import { BadgeCheckIcon, ExternalLinkIcon } from "lucide-react";
import { PromptLabel } from "@/components/terminal/prompt-label";
import { Reveal } from "@/components/terminal/reveal";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { certifications } from "@/data/certifications";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen w-full max-w-5xl scroll-mt-14 flex-col justify-center px-4 py-20 sm:px-6"
    >
      <Reveal>
        <PromptLabel path="~/about">cat about.md</PromptLabel>

        <div className="mt-8">
          <TerminalWindow title="yu@portfolio: ~/about">
            <div className="flex flex-col gap-6 sm:flex-row">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={140}
                height={140}
                className="size-28 shrink-0 rounded-md border border-border object-cover sm:size-32"
              />
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                {profile.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {certifications.length > 0 && (
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">$</span> cat certifications.txt
                </p>
                <ul className="mt-3 space-y-2">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <BadgeCheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>
                        {cert.url ? (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-primary hover:underline"
                          >
                            {cert.name}
                            <ExternalLinkIcon className="size-3" />
                          </a>
                        ) : (
                          cert.name
                        )}
                        <span className="block text-xs text-muted-foreground">
                          {cert.issuer}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TerminalWindow>
        </div>
      </Reveal>
    </section>
  );
}
