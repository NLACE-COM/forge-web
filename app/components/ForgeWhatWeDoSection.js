export default function ForgeWhatWeDoSection({
  sectionRef,
  slides,
  slideSpan,
  progress,
  activeIndex,
  label = "What we do",
  problemProgress = 0,
  afterContent
}) {
  const totalLabel = String(slides.length).padStart(2, "0");

  return (
    <>
      <section
        ref={sectionRef}
        className="what-we-do tw:relative tw:z-[5] tw:mt-0 tw:bg-transparent"
        style={{ height: `${slides.length * 100}vh` }}
      >
        <div
          className="what-we-do__sticky layout-shell tw:sticky tw:top-0 tw:min-h-screen tw:pt-[126px] tw:pb-[72px]"
          style={{
            "--problem-progress": Math.min(problemProgress, 1)
          }}
        >
          <div className="what-we-do__label tw:inline-flex tw:items-center tw:gap-[10px] tw:rounded-[12px] tw:bg-[rgba(34,47,48,0.34)] tw:px-[14px] tw:py-[10px] tw:text-[0.84rem] tw:uppercase tw:tracking-[0.03em] tw:text-[#f3f2ec] tw:backdrop-blur-[12px]">
            {label}
          </div>
          <div
            className="what-we-do__line tw:mt-[42px] tw:grid tw:auto-cols-fr tw:grid-flow-col tw:gap-[10px]"
            aria-hidden="true"
          >
            {slides.map((slide, index) => {
              const fill = Math.min(Math.max((progress - index * slideSpan) / slideSpan, 0), 1);

              return (
                <span
                  className="what-we-do__segment tw:relative tw:h-px tw:overflow-visible tw:bg-[var(--line)]"
                  key={slide.id}
                >
                  <span
                    className="what-we-do__segmentFill tw:absolute tw:inset-0 tw:origin-left tw:bg-[#f3f2ec]"
                    style={{
                      transform: `scaleX(${fill}) scaleY(${fill > 0.98 ? 3 : fill > 0 ? 2.25 : 1})`
                    }}
                  />
                </span>
              );
            })}
          </div>
          <div className="what-we-do__body tw:mt-[38px] tw:grid tw:grid-cols-[180px_minmax(0,1fr)] tw:items-start tw:gap-[54px]">
            <div className="what-we-do__index tw:inline-flex tw:w-fit tw:items-center tw:gap-3 tw:rounded-full tw:border tw:border-[rgba(243,242,236,0.36)] tw:px-[22px] tw:py-4 tw:text-[1rem] tw:text-[#f3f2ec]">
              <span>{slides[activeIndex].id}</span>
              <span>/</span>
              <span>{totalLabel}</span>
            </div>
            <div className="what-we-do__slides tw:relative tw:min-h-[540px]">
              {slides.map((slide, index) => {
                const local = Math.min(Math.max((progress - index * slideSpan) / slideSpan, 0), 1);
                const isActive = index === activeIndex;
                const exitStart = index === slides.length - 1 ? 0.985 : 0.8;
                const exitProgress = isActive
                  ? Math.min(
                      Math.max((local - exitStart) / Math.max(1 - exitStart, 0.0001), 0),
                      1
                    )
                  : 0;
                const opacity =
                  index < activeIndex
                    ? 0
                    : index > activeIndex
                      ? 0
                      : 1 - Math.pow(exitProgress, 1.08);
                const translateY =
                  index < activeIndex ? -58 : index > activeIndex ? 30 : exitProgress * -48;

                return (
                  <article
                    className={`what-we-do__slide tw:absolute tw:inset-0 tw:will-change-transform tw:[transition:opacity_0.4s_var(--transition-ease--1),transform_0.6s_var(--transition-ease--1)] ${isActive ? "is-active" : ""}`}
                    key={slide.id}
                    style={{
                      opacity,
                      transform: `translate3d(0, ${translateY}px, 0)`
                    }}
                  >
                    <div className="what-we-do__slideContent tw:grid tw:max-w-[1180px] tw:gap-[18px]">
                      {slide.blocks.map((block, blockIndex) => {
                        const Tag = block.type === "bullet" ? "li" : "p";

                        return (
                          <Tag
                            className={`what-we-do__block what-we-do__block--${block.type} tw:m-0 tw:list-none tw:text-[rgba(243,242,236,0.56)] ${
                              block.type === "bullet"
                                ? "tw:relative tw:pl-[34px] tw:text-[clamp(1.85rem,2.3vw,2.7rem)] tw:leading-[1.08] tw:tracking-[-0.04em]"
                                : "tw:text-[clamp(3rem,5vw,5.8rem)] tw:leading-[0.95] tw:tracking-[-0.07em] tw:[text-shadow:0_12px_40px_rgba(0,0,0,0.12)]"
                            }`}
                            key={`${slide.id}-${block.type}-${blockIndex}`}
                          >
                            {block.words.map((item, wordIndex) => {
                              const wordProgress = (local * block.words.length) - wordIndex;
                              const wordOpacity = Math.min(Math.max(wordProgress * 1.5, 0.2), 1);
                              const isFullyRevealed = wordProgress >= 0.8;

                              return (
                                <span
                                  className={`what-we-do__word tw:transition-colors tw:duration-150 tw:ease-linear ${
                                    isFullyRevealed && isActive ? "is-on" : ""
                                  } ${item.emphasis ? "is-emphasis tw:font-semibold" : ""}`}
                                  key={`${slide.id}-${blockIndex}-${wordIndex}`}
                                  style={{
                                    opacity: wordOpacity,
                                    filter: `blur(${Math.max(0, (1 - wordOpacity) * 4)}px)`,
                                    transform: `translate3d(0, ${Math.max(0, (1 - wordOpacity) * 8)}px, 0)`
                                  }}
                                >
                                  {item.word}
                                  {wordIndex < block.words.length - 1 ? " " : ""}
                                </span>
                              );
                            })}
                          </Tag>
                        );
                      })}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {afterContent ? (
        <section className="what-we-do__after layout-shell tw:relative tw:z-[6] tw:pb-24">
          <div className="what-we-do__afterCard tw:max-w-[760px] tw:rounded-[32px] tw:bg-white tw:px-10 tw:py-10 tw:text-black tw:shadow-[0_18px_60px_rgba(17,17,17,0.08)] max-[720px]:tw:px-6 max-[720px]:tw:py-7">
            <h2 className="tw:m-0 tw:max-w-[11ch] tw:text-[clamp(2.2rem,4vw,3.6rem)] tw:font-normal tw:leading-[0.94] tw:tracking-[-0.06em] tw:text-black">
              {afterContent.headingSegments.map((segment, index) => (
                <span
                  key={`${segment.text}-${index}`}
                  className={segment.accent ? "tw:text-[var(--color--2)]" : undefined}
                >
                  {segment.text}
                </span>
              ))}
            </h2>
            <h3 className="tw:mt-8 tw:m-0 tw:text-[var(--type-h3)] tw:font-normal tw:tracking-[-0.04em] tw:text-black">
              {afterContent.subheading}
            </h3>
            <ul className="tw:mt-8 tw:grid tw:gap-3 tw:pl-5 tw:text-[var(--type-body)] tw:leading-[1.4] tw:text-[rgba(0,0,0,0.82)]">
              {afterContent.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
