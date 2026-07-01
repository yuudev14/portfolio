import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function TerminalWindow({
  title,
  children,
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card shadow-xl shadow-black/20",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-chart-4/70" />
        <span className="size-2.5 rounded-full bg-primary/70" />
        <span className="ml-2 truncate font-mono text-xs text-muted-foreground">
          {title}
        </span>
      </div>
      <div className="p-5 sm:p-8">{children}</div>
    </div>
  );
}
