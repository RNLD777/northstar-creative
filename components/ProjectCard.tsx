import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/work/${project.slug}/`} className={`project-card project-card-${index + 1}`}>
      <div className={`project-image ${project.tone}`}>
        <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" />
        <span className="project-image-label">{project.imageLabel}</span>
        <span className="project-index">0{index + 1}</span>
      </div>
      <div className="project-meta"><div><span className="project-category">{project.category}</span><h3>{project.name}</h3></div><ArrowUpRight size={22} /></div>
      <p className="project-short">{project.short}</p>
    </Link>
  );
}
