import ForgeButton from "./ForgeButton";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeFilterSection({ content }) {
  return (
    <section className="filter-section layout-shell">
      <div className="filter-section__inner">
        <ForgeRevealHeading text={content.title} />
        <p>{content.body}</p>
        <div className="filter-section__actions">
          <ForgeButton href={content.primaryCta.href} label={content.primaryCta.label} />
          <ForgeButton
            href={content.secondaryCta.href}
            label={content.secondaryCta.label}
            className="hero-cta--ghost"
          />
        </div>
      </div>
    </section>
  );
}
