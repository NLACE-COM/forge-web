import ForgeButton from "./ForgeButton";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgePlatformSection({
  sectionRef,
  isVisible,
  eyebrow,
  headingWords,
  body,
  cta
}) {
  return (
    <section id="platform" ref={sectionRef} className="platform-summary layout-shell">
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="platform-summary__content">
        <ForgeRevealHeading
          text={headingWords.join(" ")}
          className={isVisible ? "is-visible" : ""}
          mutedFrom={8}
        />
        <p>{body}</p>
        <div className="platform-summary__actions">
          <ForgeButton href={cta.href} label={cta.label} />
        </div>
      </div>
    </section>
  );
}
