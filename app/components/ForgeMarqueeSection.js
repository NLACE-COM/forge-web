export default function ForgeMarqueeSection({
  text = "Rewriting the biology of aging",
  className = ""
}) {
  const repeated = `${text} — ${text} —`;

  return (
    <section className={`marquee-band ${className}`.trim()} aria-label={text}>
      <div className="marquee-band__track">
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </section>
  );
}
