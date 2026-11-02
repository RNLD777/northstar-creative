import Link from "next/link";
export default function NotFound() { return <div className="not-found section-shell"><p className="eyebrow">404 / WRONG TURN</p><h1>THIS PAGE<br /><span className="yellow-word">WENT NORTH.</span></h1><Link href="/" className="text-link">BACK TO THE START <span>↗</span></Link></div>; }
