import type { ReactNode } from "react";

interface PromptLabelProps {
  path: string;
  children: ReactNode;
}

export function PromptLabel({ path, children }: PromptLabelProps) {
  return (
    <h2 className="font-heading flex items-baseline gap-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
      <span aria-hidden className="text-primary">
        &gt;
      </span>
      <span className="text-muted-foreground text-base sm:text-lg">
        {path}
      </span>
      <span>{children}</span>
    </h2>
  );
}
