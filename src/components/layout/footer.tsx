import { profile } from "@/data/profile";
import { socialIcons } from "@/lib/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo &quot;© {new Date().getFullYear()}{" "}
          {profile.name}&quot;
        </p>
        <ul className="flex items-center gap-5 lg:hidden">
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
      </div>
    </footer>
  );
}
