import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = { title: "Selected Work", description: "A collection of Northstar Creative concept projects." };

export default function WorkPage() {
  return <div className="inner-page section-shell"><div className="page-intro"><p className="eyebrow">THE PROOF IS IN THE PLAY</p><h1>WORK THAT<br /><span className="yellow-word">MEANS</span><br />BUSINESS.</h1><p className="intro-copy">A few ideas we've taken for a spin. Different challenges, different worlds, one shared belief: the work should have a point.</p></div><div className="project-grid work-grid">{projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}</div><p className="concept-note">All projects shown are fictional concept explorations created for this portfolio. They are not client commissions or claims of commercial results.</p></div>;
}
