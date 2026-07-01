"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { TypedText } from "@/components/terminal/typed-text";
import { profile } from "@/data/profile";

export function Hero() {
  const [nameDone, setNameDone] = useState(false);

  return (
    <section
      id="home"
      className="bg-grid relative flex min-h-screen scroll-mt-14 items-center justify-center px-4 py-24 sm:px-6"
    >
      <div className="w-full max-w-xl">
        <TerminalWindow title="yu@portfolio: ~">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> whoami
          </p>
          <h1 className="font-heading mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            <TypedText
              text={profile.name}
              speed={70}
              showCursor={!nameDone}
              onDone={() => setNameDone(true)}
            />
          </h1>
          <p className="mt-2 min-h-[1.5em] font-mono text-base text-primary sm:text-lg">
            {nameDone && (
              <TypedText text={profile.title} speed={35} startDelay={150} />
            )}
          </p>
          <p className="mt-4 font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> cat location.txt
            <br />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button render={<a href="#contact" />}>&gt; get_in_touch</Button>
            {process.env.NEXT_PUBLIC_RESUME && (
              <Button
                variant="outline"
                render={
                  <a
                    href={process.env.NEXT_PUBLIC_RESUME}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                &gt; view_resume
              </Button>
            )}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
