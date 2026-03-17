import Link from "next/link";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeServiceHubGrid({ eyebrow, title, intro, cards = [], items }) {
  const entries = cards.length ? cards : items ?? [];

  return (
    <section className="forge-service-hub layout-shell">
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="forge-service-hub__content">
        <div className="forge-service-hub__intro">
          <ForgeRevealHeading text={title} />
          {intro ? <p>{intro}</p> : null}
        </div>
        <div className="forge-service-hub__grid">
          {entries.map((item) => (
            <Link href={item.href} key={item.href} className={`forge-service-card forge-service-card--${item.tone}`}>
              <div className="forge-service-card__eyebrow">{item.eyebrow}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="forge-service-card__link">Ver servicio</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
