import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/projects/ProjectDetailPage";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects
    .filter(({ slug }) => slug !== "showreel")
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project || project.slug === "showreel") return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: { images: [project.cover] },
  };
}

export default async function Page({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project || project.slug === "showreel") notFound();

  return <ProjectDetailPage project={project} />;
}
