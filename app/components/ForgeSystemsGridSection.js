import ForgeButton from "./ForgeButton";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";
import ScrollReveal from "./ScrollReveal";

export default function ForgeSystemsGridSection({
  id,
  sectionRef,
  isVisible,
  content,
  className = ""
}) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`systems-grid-section ${className} tw:pt-24`.trim()}
    >
      <div className="layout-shell systems-grid-section__header tw:grid tw:grid-cols-[220px_minmax(0,1fr)] tw:gap-8 max-[980px]:tw:grid-cols-1">
        <ForgeEyebrow>{content.eyebrow}</ForgeEyebrow>
        <div className="systems-grid-section__intro tw:max-w-[780px]">
          {content.title ? <ForgeRevealHeading text={content.title} /> : null}
          {content.intro ? <p className="tw:mt-5 tw:m-0 tw:text-[1.08rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">{content.intro}</p> : null}
          {content.closing ? <p className="systems-grid-section__closing tw:mt-4 tw:m-0 tw:text-[1rem] tw:leading-[1.45] tw:text-[rgba(34,47,48,0.72)]">{content.closing}</p> : null}
          {content.cta ? (
            <div className="systems-grid-section__actions tw:mt-8">
              <ForgeButton href={content.cta.href} label={content.cta.label} />
            </div>
          ) : null}
        </div>
      </div>

      <ScrollReveal stagger={0.15}>
        <div className={`capability-grid capability-grid--four tw:mt-8 tw:grid tw:grid-cols-4 tw:gap-5 max-[1200px]:tw:grid-cols-2 max-[980px]:tw:grid-cols-1 ${isVisible ? "is-visible" : ""}`}>
          {content.cards.map((card) => (
            <article className={`capability-card capability-card--${card.tone} reveal-item tw:relative tw:min-h-[360px] tw:overflow-hidden tw:rounded-[28px] tw:p-0`} key={card.id}>
              <div className="capability-card__reveal" />
              <div className="capability-card__inner tw:relative tw:z-[1] tw:flex tw:h-full tw:flex-col tw:p-7">
                <div className="capability-card__top capability-card__top--compact tw:min-h-4" />
                <div className="capability-card__bottom capability-card__bottom--rich tw:mt-auto">
                  {card.logo ? (
                    <div className="capability-card__logoWrap tw:mb-5">
                      <img className="capability-card__logo tw:max-h-10 tw:w-auto" src={card.logo} alt={card.logoAlt ?? card.id} />
                    </div>
                  ) : (
                    <h3 className="tw:m-0 tw:text-[1.55rem] tw:leading-[1.04] tw:tracking-[-0.04em]">{card.title ?? card.id}</h3>
                  )}
                  {card.summary ? <p className="capability-card__summary tw:mt-4 tw:m-0 tw:text-[1rem] tw:leading-[1.42]">{card.summary}</p> : null}
                  {card.copy ? <p className="tw:mt-4 tw:m-0 tw:text-[0.98rem] tw:leading-[1.45]">{card.copy}</p> : null}
                  {card.resolve ? (
                    <div className="capability-card__metaGroup capability-card__metaGroup--resolve tw:mt-6">
                      <span className="tw:block tw:font-[var(--family--2)] tw:text-[0.78rem] tw:uppercase tw:tracking-[0.04em]">Resuelve</span>
                      <p className="tw:mt-2 tw:m-0 tw:text-[0.95rem] tw:leading-[1.4]">{card.resolve}</p>
                    </div>
                  ) : null}
                  {card.install ? (
                    <div className="capability-card__metaGroup capability-card__metaGroup--install tw:mt-6">
                      <span className="tw:block tw:font-[var(--family--2)] tw:text-[0.78rem] tw:uppercase tw:tracking-[0.04em]">Instala</span>
                      <p className="tw:mt-2 tw:m-0 tw:text-[0.95rem] tw:leading-[1.4]">{card.install}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
