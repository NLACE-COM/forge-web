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
    <section id="platform" ref={sectionRef} className="platform-summary layout-shell tw:pt-24">
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="platform-summary__content tw:max-w-[820px]">
        <ForgeRevealHeading
          text={headingWords.join(" ")}
          className={isVisible ? "is-visible" : ""}
          mutedFrom={8}
        />
        <p className="tw:mt-5 tw:m-0 tw:max-w-[48ch] tw:text-[1.08rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">{body}</p>
        <div className="platform-summary__actions tw:mt-8">
          <ForgeButton href={cta.href} label={cta.label} />
        </div>
      </div>
    </section>
  );
}
