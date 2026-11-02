import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Start a conversation with Northstar Creative." };

export default function ContactPage() {
  return <div className="inner-page section-shell contact-page"><div className="page-intro"><p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p><h1>GOT A<br />GOOD <span className="yellow-word">ONE?</span></h1><p className="intro-copy">A new business, a brand that needs a rethink, a campaign you've been sitting on. Tell us what's on your mind.</p></div><div className="contact-layout"><div className="contact-aside"><span className="contact-symbol">✳</span><p>NO PERFECT BRIEF REQUIRED.<br />JUST A PLACE TO START.</p><span className="eyebrow">EMAIL</span><a href="mailto:hello@northstarcreative.example">hello@northstarcreative.example</a><span className="eyebrow">BASED IN</span><p>NAIROBI, KENYA<br />WORKING EVERYWHERE</p></div><ContactForm /></div><p className="concept-note">Northstar Creative is a fictional portfolio concept. The email address above is a placeholder and is not monitored.</p></div>;
}
