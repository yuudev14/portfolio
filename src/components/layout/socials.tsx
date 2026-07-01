import { profile } from "@/data/profile";
import { socialIcons } from "@/lib/social-icons";

export function Socials() {
  return (
    <>
      <div className="fixed bottom-0 left-6 z-30 hidden flex-col items-center gap-4 lg:flex">
        <ul className="flex flex-col gap-4">
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            );
          })}
        </ul>
        <span className="h-24 w-px bg-border" />
      </div>

      <div className="fixed bottom-0 right-6 z-30 hidden flex-col items-center gap-4 lg:flex">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs text-muted-foreground [writing-mode:vertical-rl] transition-colors hover:text-primary"
        >
          {profile.email}
        </a>
        <span className="h-24 w-px bg-border" />
      </div>
    </>
  );
}
