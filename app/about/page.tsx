import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";

export const metadata: Metadata = { title: "About", description: "The thinking behind Northstar Creative." };

const steps = [
  ["01", "Get clear", "We start with the business, the audience and the actual problem. Not the colour palette."],
  ["02", "Find the idea", "We look for the angle that makes the message sharper, more relevant and more ownable."],
  ["03", "Make it real", "We turn the thinking into useful creative, then refine it until every piece earns its place."],
];

export default function AboutPage() {
  return <div className="inner-page section-shell"><div className="page-intro"><p className="eyebrow">A LITTLE ABOUT OUR NORTHSTAR</p><h1>NO BIG<br />EGOS. <span className="yellow-word">BIG</span><br />IDEAS.</h1><p className="intro-copy">We're a creative agency concept built on a simple belief: good work starts with understanding what needs to change.</p></div><section className="about-manifesto"><div className="about-asterisk">✳</div><p>We're not interested in making things louder just to get noticed. We're interested in making them <span className="yellow-word">matter.</span></p></section><section className="approach"><p className="eyebrow">HOW WE GET THERE</p><h2>THINK IT THROUGH.<br /><span className="yellow-word">MAKE IT COUNT.</span></h2><div className="approach-grid">{steps.map(([n, title, body]) => <div className="approach-card" key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></div>)}</div></section><section className="about-note"><p className="eyebrow">A NOTE ON THIS PROJECT</p><p>Northstar Creative is a fictional agency identity and website concept developed as a portfolio exercise. It explores how strategy, copywriting, branding and web design can come together in one coherent experience.</p><Link href="/work/" className="text-link">SEE THE CONCEPT WORK <ArrowUpRight size={16} /></Link></section></div>;
}
