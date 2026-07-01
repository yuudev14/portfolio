"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypedTextProps {
  text: string;
  startDelay?: number;
  speed?: number;
  onDone?: () => void;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
}

export function TypedText({
  text,
  startDelay = 0,
  speed = 45,
  onDone,
  className,
  cursorClassName,
  showCursor = true,
}: TypedTextProps) {
  const [chars, setChars] = useState(0);
  const done = chars >= text.length;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setChars((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  useEffect(() => {
    if (done) onDone?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  return (
    <span className={cn("font-mono", className)}>
      {text.slice(0, chars)}
      {showCursor && (
        <span
          aria-hidden
          className={cn(
            "animate-caret-blink ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[0.15em] bg-primary align-middle",
            cursorClassName,
          )}
        />
      )}
    </span>
  );
}
