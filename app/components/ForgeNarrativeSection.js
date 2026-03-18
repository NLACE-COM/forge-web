import ForgeButton from "./ForgeButton";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeNarrativeSection({ id, content, className = "" }) {
  return (
    <section id={id} className={`narrative-section layout-shell ${className} tw:pt-24`.trim()}>
      <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
      <div className="narrative-section__content tw:flex tw:flex-col tw:gap-7">
        {content.title ? <ForgeRevealHeading text={content.title} /> : null}
        {content.body ? <p className="narrative-section__lead tw:m-0 tw:max-w-[48ch] tw:text-[1.15rem] tw:leading-[1.28] tw:tracking-[-0.03em] tw:text-[var(--ink-soft)]">{content.body}</p> : null}
        {content.intro ? <p className="narrative-section__lead tw:m-0 tw:max-w-[48ch] tw:text-[1.15rem] tw:leading-[1.28] tw:tracking-[-0.03em] tw:text-[var(--ink-soft)]">{content.intro}</p> : null}
        {content.description ? <p className="narrative-section__lead tw:m-0 tw:max-w-[48ch] tw:text-[1.15rem] tw:leading-[1.28] tw:tracking-[-0.03em] tw:text-[var(--ink-soft)]">{content.description}</p> : null}

        {content.primaryBullets ? (
          <ul className="narrative-section__list tw:grid tw:gap-3 tw:pl-5">
            {content.primaryBullets.map((item) => (
              <li key={item} className="tw:text-[1rem] tw:leading-[1.45]">{item}</li>
            ))}
          </ul>
        ) : null}

        {content.checklistTitle ? (
          <div className="narrative-section__subgroup tw:flex tw:flex-col tw:gap-4">
            <h3 className="tw:m-0 tw:text-[1.45rem] tw:tracking-[-0.04em]">{content.checklistTitle}</h3>
            <ul className="narrative-section__list tw:grid tw:gap-3 tw:pl-5">
              {content.checklist.map((item) => (
                <li key={item} className="tw:text-[1rem] tw:leading-[1.45]">{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {content.coversTitle ? (
          <div className="narrative-section__grid tw:grid tw:grid-cols-2 tw:gap-6 max-[980px]:tw:grid-cols-1">
            <div>
              <h3 className="tw:m-0 tw:text-[1.45rem] tw:tracking-[-0.04em]">{content.coversTitle}</h3>
              <ul className="narrative-section__list tw:mt-4 tw:grid tw:gap-3 tw:pl-5">
                {content.covers.map((item) => (
                  <li key={item} className="tw:text-[1rem] tw:leading-[1.45]">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="tw:m-0 tw:text-[1.45rem] tw:tracking-[-0.04em]">{content.notTitle}</h3>
              <ul className="narrative-section__list tw:mt-4 tw:grid tw:gap-3 tw:pl-5">
                {content.notItems.map((item) => (
                  <li key={item} className="tw:text-[1rem] tw:leading-[1.45]">{item}</li>
                ))}
              </ul>
              <div className="narrative-section__subgroup tw:mt-6">
                <h3 className="tw:m-0 tw:text-[1.45rem] tw:tracking-[-0.04em]">{content.takeawayTitle}</h3>
                <p className="tw:mt-4 tw:m-0 tw:text-[1rem] tw:leading-[1.5] tw:text-[var(--ink-soft)]">{content.takeaway}</p>
              </div>
            </div>
          </div>
        ) : null}

        {content.items ? (
          <ul className="narrative-section__list narrative-section__list--large tw:grid tw:gap-4 tw:pl-5">
            {content.items.map((item) => (
              <li key={item} className="tw:text-[1.12rem] tw:leading-[1.4]">{item}</li>
            ))}
          </ul>
        ) : null}

        {content.closing ? <p className="narrative-section__closing tw:m-0 tw:max-w-[46ch] tw:text-[1.05rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">{content.closing}</p> : null}

        {content.cta ? (
          <div className="narrative-section__actions tw:pt-2">
            <ForgeButton href={content.cta.href} label={content.cta.label} />
          </div>
        ) : null}

        {content.microcopy ? <div className="section-microcopy">{content.microcopy}</div> : null}
      </div>
    </section>
  );
}
