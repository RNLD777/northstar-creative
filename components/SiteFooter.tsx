import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-top"><div><span className="footer-mark">N✳</span><p>GOOD THINKING.<br />GOOD TROUBLE.</p></div><div className="footer-links"><div><span className="eyebrow">EXPLORE</span><Link href="/work/">Work</Link><Link href="/services/">Services</Link><Link href="/about/">About</Link></div><div><span className="eyebrow">SAY HELLO</span><Link href="/contact/">Start a project <ArrowUpRight size={14} /></Link><a href="mailto:hello@northstarcreative.example">Email us <ArrowUpRight size={14} /></a></div></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} NORTHSTAR CREATIVE — CONCEPT PROJECT</span><span>MADE WITH INTENTION. NOT TEMPLATE.</span><Link href="#">BACK TO TOP ↑</Link></div>
    </footer>
  );
}
