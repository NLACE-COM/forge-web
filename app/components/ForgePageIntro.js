import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgePageIntro({ eyebrow, title, intro, body, align = "left" }) {
  return (
    <section
      className={`forge-page-intro layout-shell forge-page-intro--${align} tw:pt-16 ${align === "center" ? "tw:text-center" : ""}`.trim()}
    >
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="forge-page-intro__content tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] tw:gap-8 max-[980px]:tw:grid-cols-1 max-[980px]:tw:gap-5">
        <ForgeRevealHeading text={title} />
        {intro ? <p className="forge-page-intro__lead tw:m-0 tw:max-w-[38ch] tw:text-[var(--type-subtitle)] tw:leading-[1.2] tw:tracking-[-0.03em] tw:text-[var(--ink-soft)]">{intro}</p> : null}
        {body ? <p className="forge-page-intro__body tw:m-0 tw:max-w-[52ch] tw:text-[var(--type-body)] tw:leading-[1.5] tw:text-[rgba(34,47,48,0.72)]">{body}</p> : null}
      </div>
    </section>
  );
}
