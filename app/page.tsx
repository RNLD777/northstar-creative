import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Asterisk, MoveUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const services = [
  { n: "01", title: "Social & content", copy: "A sharper point of view. Content people actually want to stop for." },
  { n: "02", title: "Brand identity", copy: "Distinctive identities built to mean something and stay remembered." },
  { n: "03", title: "Digital experiences", copy: "Websites that look the part, work hard and move people forward." },
  { n: "04", title: "Campaigns", copy: "Big ideas with a clear job to do. From first spark to final rollout." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-kicker"><span className="status-dot" /> INDEPENDENT CREATIVE AGENCY <span className="kicker-right">NAIROBI / EVERYWHERE</span></div>
        <div className="hero-title-wrap">
          <p className="hero-side-note">GOOD IDEAS<br />DESERVE BETTER<br />EXECUTION.</p>
          <h1>MAKE YOUR<br /><span className="outline-word">BRAND</span> <span className="yellow-word">HARD</span><br />TO <span className="yellow-word">IGNORE</span><span className="hero-star">✳</span></h1>
        </div>
        <div className="hero-bottom">
          <p>We turn ambitious thinking into<br />brands, experiences and campaigns<br />that move business forward.</p>
          <Link className="round-link" href="/work/" aria-label="Explore our work"><ArrowDown size={22} /></Link>
          <p className="hero-bottom-right">STRATEGY FIRST.<br />CREATIVITY ALWAYS.</p>
        </div>
        <div className="hero-stamp" aria-hidden="true"><span>NO<br />MORE<br />SAME<br />SAME</span><Asterisk size={28} /></div>
      </section>

      <Marquee text="THINK BIGGER · MAKE IT MATTER · STAY UNIGNORABLE · " />

      <section className="manifesto section-shell section-pad">
        <Reveal><p className="eyebrow">01 / THE NORTHSTAR POINT OF VIEW</p></Reveal>
        <div className="manifesto-grid">
          <Reveal><h2>GOOD LOOKS<br />GET ATTENTION.<br /><span className="yellow-word">GOOD THINKING</span><br />EARNS IT.</h2></Reveal>
          <Reveal delay={0.12}><div className="manifesto-copy"><p className="large-copy">We believe creativity should do more than decorate a business. It should give people a reason to notice, care and choose.</p><p>So we bring sharp strategy and fearless creative together. No borrowed playbooks. No work for the sake of looking busy. Just ideas with somewhere to go.</p><Link className="text-link" href="/about/">A LITTLE ABOUT US <MoveUpRight size={16} /></Link></div></Reveal>
        </div>
      </section>

      <section className="services-section section-shell section-pad">
        <div className="section-heading"><div><p className="eyebrow">02 / WHAT WE BRING</p><h2>THE WORK<br />BEHIND THE <span className="yellow-word">WOW.</span></h2></div><p className="section-aside">Different disciplines.<br />One clear direction.</p></div>
        <div className="service-list">
          {services.map((s) => <Link href="/services/" className="service-row" key={s.n}><span className="service-number">{s.n}</span><h3>{s.title}</h3><p>{s.copy}</p><ArrowUpRight className="service-arrow" /></Link>)}
        </div>
      </section>

      <section className="work-section section-shell section-pad">
        <div className="section-heading"><div><p className="eyebrow">03 / SELECTED EXPERIMENTS</p><h2>IDEAS, OUT<br />IN THE <span className="yellow-word">WILD.</span></h2></div><Link className="text-link" href="/work/">VIEW ALL PROJECTS <MoveUpRight size={16} /></Link></div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}
        </div>
        <p className="concept-note">* These are fictional concept projects created to demonstrate creative direction and execution.</p>
      </section>

      <section className="big-cta section-shell">
        <div className="cta-top"><span>HAVE A GOOD ONE?</span><span>LET'S MAKE IT GREAT.</span></div>
        <h2>YOUR NEXT<br />MOVE STARTS<br /><span className="black-outline">HERE.</span></h2>
        <Link href="/contact/" className="cta-button">TELL US WHAT YOU'RE THINKING <ArrowUpRight size={20} /></Link>
        <span className="cta-asterisk">✳</span>
      </section>
    </>
  );
}
