function easeInOutCubic(value) {
  if (value <= 0) {
    return 0;
  }

  if (value >= 1) {
    return 1;
  }

  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function renderClosingRotate(segments, revealProgress) {
  const lines = segments.map((segment, segmentIndex) => {
    const words = segment.text.split(" ").filter(Boolean);

    return (
      <span
        key={`closing-line-${segmentIndex}`}
        className="tw:block"
        style={{ marginTop: segmentIndex === 0 ? 0 : "0.06em" }}
      >
        {words.map((word, wordIndex) => {
          const absoluteIndex = segments
            .slice(0, segmentIndex)
            .reduce((count, current) => count + current.text.split(" ").filter(Boolean).length, 0) + wordIndex;
          const totalWords = segments.reduce(
            (count, current) => count + current.text.split(" ").filter(Boolean).length,
            0
          );
          const wordProgress = Math.min(
            Math.max((revealProgress * totalWords * 1.02) - absoluteIndex, 0),
            1
          );

          return (
            <span
              key={`${word}-${segmentIndex}-${wordIndex}`}
              className="hero-word-wrapper hero-word-wrapper--rotate"
              style={{ marginRight: wordIndex < words.length - 1 ? "0.24em" : "0" }}
            >
              <span
                className={segment.accent ? "tw:text-[var(--color--2)]" : undefined}
                style={{
                  display: "inline-block",
                  opacity: wordProgress,
                  filter: `blur(${Math.max(0, (1 - wordProgress) * 6)}px)`,
                  transform: `translateY(${(1 - wordProgress) * 145}%) rotateX(${(1 - wordProgress) * -102}deg) rotateY(${(1 - wordProgress) * -10}deg)`,
                  transformOrigin: "50% 100%",
                  backfaceVisibility: "hidden",
                  willChange: "transform, opacity, filter",
                  transition: "transform 1.15s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), filter 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
                  transitionDelay: `${absoluteIndex * 42}ms`
                }}
              >
                {word}
              </span>
            </span>
          );
        })}
      </span>
    );
  });

  return lines;
}

export default function ForgeWhatWeDoSection({
  sectionRef,
  slides,
  slideSpans,
  slideStarts,
  progress,
  activeIndex,
  label = "What we do",
  problemProgress = 0,
  afterContent
}) {
  const totalLabel = String(slides.length).padStart(2, "0");
  const stickyScrollScreens = slides.length + 7;
  const afterRevealProgress = easeInOutCubic(
    Math.min(Math.max((problemProgress - 0.974) / 0.026, 0), 1)
  );
  const closingRevealProgress = easeInOutCubic(
    Math.min(Math.max((afterRevealProgress - 0.42) / 0.58, 0), 1)
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="what-we-do tw:relative tw:z-[5] tw:mt-0 tw:bg-transparent"
        style={{ height: `${stickyScrollScreens * 100}vh` }}
      >
        <div
          className="what-we-do__sticky layout-shell tw:sticky tw:top-0 tw:min-h-screen tw:pt-[126px] tw:pb-[72px]"
          style={{
            "--problem-progress": Math.min(problemProgress, 1)
          }}
        >
          <div className="what-we-do__label tw:inline-grid tw:w-fit tw:max-w-full tw:grid-cols-[10px_minmax(0,1fr)] tw:items-center tw:gap-x-3 tw:rounded-[10px] tw:border tw:border-[var(--color--2)] tw:bg-white tw:px-[16px] tw:py-[8px] tw:text-[0.95rem] tw:font-normal tw:uppercase tw:tracking-[-0.02em] tw:text-[rgba(17,17,17,0.62)]">
            {label}
          </div>
          <div
            className="what-we-do__line tw:mt-[42px] tw:grid tw:auto-cols-fr tw:grid-flow-col tw:gap-[10px]"
            aria-hidden="true"
          >
            {slides.map((slide, index) => {
              const start = slideStarts[index] ?? 0;
              const span = slideSpans[index] ?? 1;
              const fill = Math.min(Math.max((progress - start) / span, 0), 1);

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
                const start = slideStarts[index] ?? 0;
                const span = slideSpans[index] ?? 1;
                const local = Math.min(Math.max((progress - start) / span, 0), 1);
                const isActive = index === activeIndex;
                const revealProgress = Math.min(local / 0.58, 1);
                const exitStart = index === slides.length - 1 ? 0.992 : 0.93;
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
                    <div className="what-we-do__slideContent tw:grid tw:max-w-[1320px] tw:gap-[18px]">
                      {slide.blocks.map((block, blockIndex) => {
                        const Tag = block.type === "bullet" ? "li" : "p";
                        const blockStyle =
                          block.type === "bullet"
                            ? {
                                fontSize: "clamp(1.9rem, 2.7vw, 2.8rem)",
                                lineHeight: 1.06,
                                letterSpacing: "-0.035em"
                              }
                            : {
                                fontSize: "clamp(3.2rem, 5vw, 5.4rem)",
                                lineHeight: 0.92,
                                letterSpacing: "-0.06em"
                              };

                        return (
                          <Tag
                            className={`what-we-do__block what-we-do__block--${block.type} tw:m-0 tw:list-none tw:text-[rgba(243,242,236,0.56)] ${
                              block.type === "bullet"
                                ? "tw:relative tw:pl-[34px]"
                                : "tw:[text-shadow:0_12px_40px_rgba(0,0,0,0.12)]"
                            }`}
                            key={`${slide.id}-${block.type}-${blockIndex}`}
                            style={blockStyle}
                          >
                            {block.words.map((item, wordIndex) => {
                              const wordProgress = (revealProgress * block.words.length) - wordIndex;
                              const wordOpacity = Math.min(Math.max(wordProgress * 1.65, 0), 1);
                              const isFullyRevealed = wordProgress >= 0.92;

                              return (
                                <span key={`${slide.id}-${blockIndex}-${wordIndex}`}>
                                  <span
                                    className={`what-we-do__word tw:inline-block tw:transition-colors tw:duration-150 tw:ease-linear ${
                                      isFullyRevealed && isActive ? "is-on" : ""
                                    } ${item.emphasis ? "is-emphasis tw:font-semibold" : ""}`}
                                    style={{
                                      opacity: wordOpacity,
                                      filter: `blur(${Math.max(0, (1 - wordOpacity) * 6)}px)`,
                                      transform: `translate3d(0, ${Math.max(0, (1 - wordOpacity) * 14)}px, 0)`,
                                      marginRight: wordIndex < block.words.length - 1 ? "0.24em" : "0"
                                    }}
                                  >
                                    {item.word}
                                  </span>
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
        <section
          className="what-we-do__after tw:relative tw:z-[6] tw:bg-[var(--bg)] tw:pt-[4vh] tw:pb-[20vh] max-[980px]:tw:pt-10 max-[980px]:tw:pb-16"
        >
          <div
            className="layout-shell"
            style={{
              opacity: afterRevealProgress,
              transform: `translate3d(0, ${(1 - afterRevealProgress) * 64}px, 0)`,
              pointerEvents: afterRevealProgress > 0 ? "auto" : "none",
              transition: "opacity 720ms var(--transition-ease--1), transform 720ms var(--transition-ease--1)"
            }}
          >
            <div className="tw:grid tw:grid-cols-[180px_minmax(0,1fr)] tw:gap-[54px] max-[980px]:tw:grid-cols-1 max-[980px]:tw:gap-8">
              <div className="tw:pt-[6px] max-[980px]:tw:pt-0">
                <div className="eyebrow tw:inline-grid tw:w-fit tw:max-w-full tw:grid-cols-[10px_minmax(0,1fr)] tw:items-center tw:gap-x-3 tw:rounded-[10px] tw:border tw:border-[var(--color--2)] tw:bg-white tw:px-[16px] tw:py-[8px] tw:text-[0.95rem] tw:font-normal tw:uppercase tw:tracking-[-0.02em] tw:text-[rgba(17,17,17,0.62)]">
                  <span className="eyebrow__dot tw:h-[10px] tw:w-[10px] tw:rounded-[1px] tw:bg-[var(--color--2)]" aria-hidden="true" />
                  <span className="eyebrow__text">{label}</span>
                </div>
              </div>
              <div className="tw:w-full tw:max-w-[980px] tw:justify-self-end tw:text-black max-[980px]:tw:max-w-full max-[980px]:tw:justify-self-start">
                <h3 className="tw:m-0 tw:text-[var(--type-h3)] tw:font-normal tw:tracking-[-0.04em] tw:text-black">
                  {afterContent.subheading}
                </h3>
                <ul className="tw:mt-6 tw:grid tw:gap-3 tw:pl-6 tw:text-[clamp(1.02rem,1.1vw,1.18rem)] tw:leading-[1.34] tw:text-[rgba(0,0,0,0.84)]">
                  {afterContent.bullets.map((bullet, index) => (
                    <li key={index}>
                      {bullet.map((segment, segmentIndex) => (
                        <span
                          key={`${segment.text}-${segmentIndex}`}
                          className={segment.accent ? "tw:text-[var(--color--2)] tw:font-semibold" : undefined}
                        >
                          {segment.text}
                        </span>
                      ))}
                    </li>
                  ))}
                </ul>
                <p
                  className="tw:mt-10 tw:m-0 tw:max-w-[980px] tw:text-black tw:[text-wrap:pretty] max-[980px]:tw:max-w-full"
                  style={{
                    fontFamily: "var(--family--display)",
                    fontSize: "clamp(2.05rem, 2.9vw, 3rem)",
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: "-0.045em"
                  }}
                >
                  {renderClosingRotate(afterContent.closing, closingRevealProgress)}
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
