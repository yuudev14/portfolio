"use client";

import { MenuIcon } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#skills", label: "/skills" },
  { href: "#experience", label: "/experience" },
  // { href: "#projects", label: "/projects" },
  { href: "#about", label: "/about" },
  { href: "#contact", label: "/contact" },
];

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: (href: string) => void;
}) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(href);
      }}
      className="transition-colors hover:text-primary"
    >
      {label}
    </a>
  );
}

export function Nav() {
  const lenis = useLenis();

  const scrollToHash = (hash: string) => {
    lenis?.scrollTo(hash);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            scrollToHash("#home");
          }}
          className="font-mono text-sm text-foreground transition-colors hover:text-primary"
        >
          <span className="text-primary">yu</span>@portfolio:
          <span className="text-primary">~$</span>
        </a>

        <nav className="hidden items-center gap-6 font-mono text-sm text-muted-foreground sm:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              onNavigate={scrollToHash}
            />
          ))}
        </nav>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="sm:hidden">
                <MenuIcon />
                <span className="sr-only">Open menu</span>
              </Button>
            }
          />
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="font-mono">yu@portfolio:~$</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 font-mono text-sm">
              {links.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <a
                      href={link.href}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToHash(link.href);
                      }}
                      className="rounded-md px-2 py-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                    >
                      {link.label}
                    </a>
                  }
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
