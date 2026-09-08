import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

const eyebrowClass = "m-0 mb-6 text-[.68rem] font-semibold tracking-[.24em] text-[#f0ef18] uppercase";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: { images: [project.cover] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex(({ slug }) => slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="bg-[#0a0a09] text-[#f1f0eb]">
      <section className="relative min-h-[min(82svh,900px)] overflow-hidden bg-[#171713]">
        <img className="absolute inset-0 h-full w-full object-cover" src={project.cover} alt={`Still from ${project.title}`} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78)_0%,rgba(0,0,0,.2)_60%,rgba(0,0,0,.38)_100%),linear-gradient(0deg,rgba(0,0,0,.55),transparent_48%)]" />
        <div className="absolute right-6 bottom-[clamp(50px,9vh,110px)] left-[clamp(24px,8vw,150px)] z-[2]">
          <p className={eyebrowClass}>{project.category}{project.year ? ` · ${project.year}` : ""}</p>
          <h1 className="m-0 max-w-[1200px] text-[clamp(3.3rem,8.3vw,8.8rem)] leading-[.86] font-light tracking-[-.055em] uppercase">{project.title}</h1>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-[50px] px-[clamp(24px,8vw,150px)] py-[clamp(80px,11vw,160px)] min-[801px]:grid-cols-[1.4fr_.6fr] min-[801px]:gap-[clamp(60px,12vw,220px)]">
        <div>
          <p className={eyebrowClass}>The project</p>
          <p className="m-0 max-w-[850px] text-[clamp(1.55rem,3vw,3.4rem)] leading-[1.2] font-light tracking-[-.025em]">{project.description}</p>
        </div>
        <dl className="mt-[38px]">
          {project.credits.map((credit) => (
            <div className="border-b border-white/20 py-3.5" key={credit.label}>
              <dt className="text-[.6rem] tracking-[.14em] text-[#a4a39d] uppercase">{credit.label}</dt>
              <dd className="mt-[5px] mb-0 ml-0 text-[.9rem]">{credit.href ? <a className="hover:text-[#f0ef18]" href={credit.href} target="_blank" rel="noreferrer">{credit.value} ↗</a> : credit.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {project.showVideo && (
        <section className="relative aspect-video w-full bg-black" aria-label={`${project.title} video`}>
          <video className="absolute inset-0 h-full w-full object-cover" controls playsInline preload="metadata" poster={project.cover}>
            <source src={project.previewVideo} type="video/webm" />
          </video>
        </section>
      )}

      {project.gallery.length > 0 && (
        <section className="grid grid-cols-1 gap-[3px] min-[801px]:grid-cols-2 min-[801px]:[&>img:first-child]:col-span-2" aria-label={`${project.title} gallery`}>
          {project.gallery.map((image, index) => (
            <img className="aspect-video w-full object-cover" src={image} alt={`${project.title} production still ${index + 1}`} key={image} />
          ))}
        </section>
      )}

      <section className="px-[clamp(24px,8vw,150px)] py-[clamp(80px,10vw,140px)]">
        <p className={eyebrowClass}>Next project</p>
        <Link className="flex items-center justify-between gap-[30px] border-y border-white/20 py-[22px] text-[clamp(2.5rem,6vw,6.5rem)] leading-none font-light tracking-[-.04em] uppercase transition-colors hover:text-[#f0ef18]" href={`/projects/${nextProject.slug}`}>
          <span>{nextProject.title}</span><span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
