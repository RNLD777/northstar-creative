import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? project.name : "Project" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <article className="inner-page section-shell case-study">
    <Link href="/work/" className="back-link"><ArrowLeft size={16} /> BACK TO WORK</Link>
    <div className="case-heading"><p className="eyebrow">{project.category} / CONCEPT PROJECT</p><h1>{project.name.split(" ")[0]}<br /><span className="yellow-word">{project.name.split(" ").slice(1).join(" ")}</span></h1><p className="intro-copy">{project.short}</p></div>
    <div className="case-image"><Image src={project.image} alt={project.imageAlt} fill priority sizes="100vw" /></div>
    <div className="case-content"><div><span className="eyebrow">THE CHALLENGE</span><p>{project.challenge}</p></div><div><span className="eyebrow">THE THINKING</span><p>{project.approach}</p></div><div><span className="eyebrow">THE DELIVERABLE</span><p>{project.outcome}</p></div></div>
    <div className="case-disclaimer">This is a fictional concept project. The strategy, creative direction and deliverables are illustrative, not evidence of commissioned client work or measured results.</div>
    <Link href="/contact/" className="case-next">HAVE A CHALLENGE OF YOUR OWN? <ArrowUpRight /></Link>
  </article>;
}
