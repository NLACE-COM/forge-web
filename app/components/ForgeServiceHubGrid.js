import Link from "next/link";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeServiceHubGrid({ eyebrow, title, intro, cards = [], items }) {
  const entries = cards.length ? cards : items ?? [];

  return (
    <section className="forge-service-hub layout-shell tw:pt-24">
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="forge-service-hub__content tw:flex tw:flex-col tw:gap-8">
        <div className="forge-service-hub__intro tw:max-w-[760px]">
          <ForgeRevealHeading text={title} />
          {intro ? <p className="tw:mt-5 tw:m-0 tw:text-[1.08rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">{intro}</p> : null}
        </div>
        <div className="forge-service-hub__grid tw:grid tw:grid-cols-2 tw:gap-5 max-[980px]:tw:grid-cols-1">
          {entries.map((item) => (
            <Link href={item.href} key={item.href} className={`forge-service-card forge-service-card--${item.tone} tw:flex tw:min-h-[280px] tw:flex-col tw:rounded-[28px] tw:p-7`}>
              <div className="forge-service-card__eyebrow tw:mb-5 tw:font-[var(--family--2)] tw:text-[0.82rem] tw:uppercase tw:tracking-[0.04em]">{item.eyebrow}</div>
              <h3 className="tw:m-0 tw:max-w-[18ch] tw:text-[1.9rem] tw:leading-[1.02] tw:tracking-[-0.05em]">{item.title}</h3>
              <p className="tw:mt-4 tw:m-0 tw:max-w-[36ch] tw:text-[1rem] tw:leading-[1.45]">{item.body}</p>
              <span className="forge-service-card__link tw:mt-auto tw:pt-8">Ver servicio</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
