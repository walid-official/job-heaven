"use client";

import Hero from "../Hero/Hero";
import RetroGrid from "../ui/retro-grid";

// import RetroGrid from "../ui/retro-grid";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      {/* <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Retro Grid
      </span> */}
      <Hero></Hero>
      <RetroGrid />
    </div>
  );
}
