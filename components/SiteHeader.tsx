"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/work/", label: "Work" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="site-header">
      <Link href="/" className="brand-lockup" onClick={() => setOpen(false)} aria-label="Northstar Creative home">
        <span className="brand-symbol">N<span>✳</span></span><span className="brand-name">NORTHSTAR<br />CREATIVE</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(link => <Link key={link.href} href={link.href} className={path.startsWith(link.href) ? "active" : ""}>{link.label}</Link>)}
      </nav>
      <Link className="header-contact" href="/contact/">LET'S TALK <ArrowUpRight size={15} /></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link href="/contact/" onClick={() => setOpen(false)}>Contact <ArrowUpRight size={16} /></Link></nav>}
    </header>
  );
}
