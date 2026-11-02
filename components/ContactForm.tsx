"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("Not sure yet");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject type: ${project}\nBudget: ${budget}\n\n${message}`);
    setNotice("Your email app should open with the enquiry drafted. This demo does not store submissions.");
    window.location.href = `mailto:hello@northstarcreative.example?subject=${subject}&body=${body}`;
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <label>Your name<input required value={name} onChange={e => setName(e.target.value)} placeholder="What should we call you?" /></label>
    <label>Email address<input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@yourbusiness.com" /></label>
    <label>What are you thinking about?<select required value={project} onChange={e => setProject(e.target.value)}><option value="">Choose a starting point</option><option>Social & content</option><option>Brand identity</option><option>Website / digital experience</option><option>Campaign</option><option>A bit of everything</option><option>Not sure yet</option></select></label>
    <label>Budget range<select value={budget} onChange={e => setBudget(e.target.value)}><option>Not sure yet</option><option>Under KES 50,000</option><option>KES 50,000–150,000</option><option>KES 150,000–500,000</option><option>KES 500,000+</option></select></label>
    <label className="full-field">Tell us a little more<textarea required rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="The challenge, the big idea, the thing that isn't working..." /></label>
    <button className="form-submit" type="submit">SEND THE FIRST SIGNAL <ArrowUpRight size={18} /></button>
    {notice && <p className="form-notice" role="status">{notice}</p>}
  </form>;
}
