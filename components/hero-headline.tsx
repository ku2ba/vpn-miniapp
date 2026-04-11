"use client";

import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

const HERO_TITLE =
  "Пользуйтесь в интернете всем, что вам нравится" as const;

export function HeroHeadline() {
  return (
    <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.1]">
      <VerticalCutReveal
        splitBy="words"
        staggerDuration={0.12}
        staggerFrom="first"
        autoStart
        containerClassName="justify-center sm:justify-start"
        transition={{
          type: "spring",
          stiffness: 190,
          damping: 22,
        }}
      >
        {HERO_TITLE}
      </VerticalCutReveal>
    </h1>
  );
}
