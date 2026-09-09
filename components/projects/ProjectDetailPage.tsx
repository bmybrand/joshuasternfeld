import type { Project } from "@/lib/projects";
import { ProjectShareLinks } from "@/components/projects/ProjectShareLinks";
import { Reveal } from "@/components/Reveal";

export function ProjectDetailPage({ project }: { project: Project }) {
  const galleryDelays = [0, 120, 240, 360, 480, 600] as const;
  const pageUrl = `https://joshuasternfeld.com/${project.slug}/`;
  const isWinterSolstice = project.slug === "winter-solstice";
  const isAmyMakesThree = project.slug === "amy-makes-three";
  const isFortress = project.slug === "fortress-snipers-eye";
  const isMeskada = project.slug === "meskada";
  const isCivicArchitecture = project.slug === "civic-architecture";
  const isVideoPage = project.gallery.length === 0 && project.showVideo;
  const heading = isCivicArchitecture ? project.title : project.title.toUpperCase();
  const galleryClass = isWinterSolstice
    ? "grid grid-cols-2 gap-[30px] max-[1024px]:grid-cols-1 max-[1024px]:gap-[10px]"
    : isAmyMakesThree || isMeskada
      ? "grid grid-cols-2 gap-4 px-[18px] max-[767px]:gap-[10px] max-[767px]:px-[7px]"
      : "grid grid-cols-2 gap-4 px-2 max-[767px]:gap-[10px]";
  const galleryImageClass = isFortress
    ? "block aspect-[1600/670] w-full object-cover"
    : "block aspect-video w-full object-cover";

  return (
    <main className="relative min-h-screen bg-[#f4f7f9] font-[Jost,sans-serif]">
      <div className="h-[100px] bg-[#15171a]" aria-hidden="true" />
      <section className="bg-black px-4 pt-12 pb-6 text-white max-[1024px]:px-0 max-[1024px]:pt-0">
        <div className="grid w-full grid-cols-1 items-start min-[768px]:grid-cols-[70%_30%] min-[768px]:max-[1024px]:grid-cols-[65%_35%]">
          <div className="min-w-0">
            {project.gallery.length > 0 ? (
              <div className={galleryClass} aria-label={`${project.title} production stills`}>
                {project.gallery.map((image, index) => (
                  <Reveal className="overflow-hidden" delay={galleryDelays[index] ?? 600} key={image}>
                    <img className={`${galleryImageClass} transition-transform duration-700 hover:scale-[1.015]`} src={image} alt={`${project.title} production still ${index + 1}`} loading={index < 2 ? "eager" : "lazy"} decoding="async" />
                  </Reveal>
                ))}
              </div>
            ) : project.showVideo ? (
              <Reveal className="px-[10px] pr-[26px] max-[767px]:px-0" from="left">
                <video className="aspect-video w-full bg-black object-contain" controls playsInline preload="metadata" poster={project.cover}>
                  <source src={project.detailVideo ?? project.previewVideo} type="video/webm" />
                </video>
              </Reveal>
            ) : (
              <Reveal from="left"><img className="block h-auto w-full" src={project.cover} alt={`Still from ${project.title}`} /></Reveal>
            )}
          </div>

          <Reveal from="right" delay={100}>
          <aside className="px-[35px] pt-[35px] pb-[50px] text-[17px] leading-[1.5] max-[1024px]:p-[25px] max-[767px]:p-3">
            <h1 className="mt-0 mb-7 max-w-[300px] text-[35px] leading-[1.05] font-semibold">{heading}</h1>
            <p className="mt-0 mb-0 border-b border-white/12 pb-6">{project.description}</p>

            <div className="grid grid-cols-2 border-b border-white/12 py-5 font-[Roboto,sans-serif] leading-[1.55] max-[767px]:grid-cols-[35%_65%]">
              <ul className="m-0 list-none p-0 font-medium">
                {project.credits.map((credit) => <li key={credit.label}>{credit.label}</li>)}
              </ul>
              <ul className="m-0 list-none p-0 font-light">
                {project.credits.map((credit) => (
                  <li key={`${credit.label}-${credit.value}`}>
                    {credit.href ? <a className="transition-colors hover:text-[#f0ef18]" href={credit.href} target="_blank" rel="noreferrer">{credit.value}</a> : credit.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-[41%_55%] items-center gap-[4%] pt-5 font-[Roboto,sans-serif]">
              <span className="font-medium">Share</span>
              <ProjectShareLinks pageUrl={pageUrl} title={project.title} />
            </div>
          </aside>
          </Reveal>
        </div>

        <p className={`mx-auto mb-0 w-full max-w-[1140px] text-[15px] leading-6 text-white ${isVideoPage ? "mt-[280px]" : "mt-[108px]"}`}>© 2026 Joshua Sternfeld – Filmmaker. All rights reserved</p>
      </section>
    </main>
  );
}
