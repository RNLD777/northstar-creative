export default function Marquee({ text }: { text: string }) {
  return <div className="marquee" aria-label={text}><div className="marquee-track"><span>{text.repeat(4)}</span></div></div>;
}
