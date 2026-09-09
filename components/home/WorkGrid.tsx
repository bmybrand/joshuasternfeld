"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";

function playPreview(event: React.SyntheticEvent<HTMLAnchorElement>) {
  const video = event.currentTarget.querySelector("video");
  if (video) void video.play();
}

function pausePreview(event: React.SyntheticEvent<HTMLAnchorElement>) {
  event.currentTarget.querySelector("video")?.pause();
}

export function WorkGrid() {
  const rowDelays = [0, 180, 360] as const;

  return (
    <section className="grid grid-cols-3 bg-black p-3 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1" id="work" aria-label="Selected work">
      {projects.map((project, index) => (
        <Reveal className="aspect-video" delay={rowDelays[index % rowDelays.length]} key={project.slug}>
          <Link className="group relative block h-full overflow-hidden bg-black" href={`/${project.slug}`} id={project.slug === "showreel" ? "showreel" : undefined} onMouseEnter={playPreview} onMouseLeave={pausePreview} onFocus={playPreview} onBlur={pausePreview}>
            <video className="absolute inset-0 z-0 h-full w-full object-cover" muted loop playsInline preload="none" aria-hidden="true"><source src={project.previewVideo} type="video/webm" /></video>
            <img className="absolute inset-0 z-[1] h-full w-full object-cover opacity-100 transition-[opacity,transform] duration-500 group-hover:scale-[1.025] group-hover:opacity-0 group-focus-visible:scale-[1.025] group-focus-visible:opacity-0" src={project.cover} alt={`${project.title} preview`} loading="lazy" decoding="async" />
            {project.slug !== "showreel" && <span className="absolute inset-0 z-[2] grid translate-y-2 place-items-center bg-black/35 p-6 text-center text-[clamp(.9rem,1.4vw,1.55rem)] tracking-[.08em] text-white uppercase opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-[520px]:translate-y-0 max-[520px]:place-items-end max-[520px]:justify-items-start max-[520px]:bg-linear-to-b max-[520px]:from-transparent max-[520px]:from-55% max-[520px]:to-black/70 max-[520px]:text-[.85rem] max-[520px]:opacity-100">{project.title}</span>}
          </Link>
        </Reveal>
      ))}
    </section>
  );
}
