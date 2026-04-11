"use client";

import { SmokeBackground } from "@/components/spooky-smoke-animation";

type SmokeLayoutShellProps = {
  children: React.ReactNode;
  /** Hex tint for the smoke highlights, e.g. `#8A2BE2` */
  smokeColor?: string;
};

export function SmokeLayoutShell({
  children,
  smokeColor = "#8A2BE2",
}: SmokeLayoutShellProps) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden
      >
        <SmokeBackground smokeColor={smokeColor} />
      </div>
      <div className="relative z-10 flex min-h-full flex-1 flex-col">{children}</div>
    </div>
  );
}
