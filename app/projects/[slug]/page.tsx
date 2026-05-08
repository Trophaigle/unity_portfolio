
import ProjectView from "@/components/ProjectView";
import { projects } from "@/data/demos";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) return notFound();

  return <ProjectView project={project} />;
}