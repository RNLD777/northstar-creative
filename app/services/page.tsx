import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";

export const metadata: Metadata = { title: "Services", description: "Social content, brand identity, digital experiences and campaigns." };

const services = [
  { no: "01", title: "Social & content", desc: "Make the scroll stop for a reason.", detail: "We help brands find their voice, build a useful content rhythm and show up with something worth saying.", list: ["Content strategy & planning", "Social media creative", "Copywriting & captions", "Content calendars"] },
  { no: "02", title: "Brand identity", desc: "Be recognisable for the right reasons.", detail: "From the first positioning question to the final visual detail, we shape brands with a clear point of view.", list: ["Brand positioning", "Visual identity direction", "Messaging & tone of voice", "Brand guidelines"] },
  { no: "03", title: "Digital experiences", desc: "Good design. Clear journeys. Less friction.", detail: "We design and build digital homes that make it easier for people to understand you and take the next step.", list: ["Website strategy & structure", "UI design", "Responsive web development", "Landing pages"] },
  { no: "04", title: "Campaigns", desc: "One strong idea. A hundred ways to meet it.", detail: "We turn business objectives into campaign concepts that connect across channels and give people a reason to act.", list: ["Campaign concepts", "Creative direction", "Advertising copy", "Digital campaign assets"] },
];

export default function ServicesPage() {
  return <div className="inner-page section-shell"><div className="page-intro"><p className="eyebrow">WHAT WE DO / WHY IT MATTERS</p><h1>CREATIVE<br />WITH A <span className="yellow-word">JOB.</span></h1><p className="intro-copy">We bring the thinking and the making together. Pick the piece you need, or bring us the bigger picture.</p></div><div className="service-detail-list">{services.map((s) => <section className="service-detail" key={s.no}><div className="service-detail-top"><span>{s.no} / SERVICE</span><Asterisk /></div><h2>{s.title}</h2><h3>{s.desc}</h3><div className="service-detail-bottom"><p>{s.detail}</p><ul>{s.list.map(item => <li key={item}>{item}</li>)}</ul></div></section>)}</div><div className="page-cta"><p>NOT SURE WHAT YOU NEED?</p><h2>THAT'S A GOOD<br /><span className="yellow-word">PLACE TO START.</span></h2><Link className="text-link" href="/contact/">LET'S FIGURE IT OUT <ArrowUpRight size={16} /></Link></div></div>;
}
