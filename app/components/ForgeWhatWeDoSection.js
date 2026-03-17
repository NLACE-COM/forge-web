export default function ForgeWhatWeDoSection({
  sectionRef,
  slides,
  slideSpan,
  progress,
  activeIndex,
  label = "What we do"
}) {
  const totalLabel = String(slides.length).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      className="what-we-do"
      style={{ height: `${slides.length * 100}vh` }}
    >
      <div className="what-we-do__sticky layout-shell">
        <div className="what-we-do__label">{label}</div>
        <div className="what-we-do__line" aria-hidden="true">
          {slides.map((slide, index) => {
            const fill = Math.min(Math.max((progress - index * slideSpan) / slideSpan, 0), 1);

            return (
              <span className="what-we-do__segment" key={slide.id}>
                <span
                  className="what-we-do__segmentFill"
                  style={{
                    transform: `scaleX(${fill}) scaleY(${fill > 0.98 ? 3 : fill > 0 ? 2.25 : 1})`
                  }}
                />
              </span>
            );
          })}
        </div>
        <div className="what-we-do__body">
          <div className="what-we-do__index">
            <span>{slides[activeIndex].id}</span>
            <span>/</span>
            <span>{totalLabel}</span>
          </div>
          <div className="what-we-do__slides">
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
                  className={`what-we-do__slide ${isActive ? "is-active" : ""}`}
                  key={slide.id}
                  style={{
                    opacity,
                    transform: `translate3d(0, ${translateY}px, 0)`
                  }}
                >
                  <div className="what-we-do__slideContent">
                    {slide.blocks.map((block, blockIndex) => {
                      const revealedWords = Math.round(local * block.words.length);
                      const Tag = block.type === "bullet" ? "li" : "p";

                      return (
                        <Tag
                          className={`what-we-do__block what-we-do__block--${block.type}`}
                          key={`${slide.id}-${block.type}-${blockIndex}`}
                        >
                          {block.words.map((item, wordIndex) => {
                            const wordProgress = (local * block.words.length) - wordIndex;
                            const wordOpacity = Math.min(Math.max(wordProgress * 1.5, 0.2), 1);
                            const isFullyRevealed = wordProgress >= 0.8;

                            return (
                              <span
                                className={`what-we-do__word ${isFullyRevealed && isActive ? "is-on" : ""} ${
                                  item.emphasis ? "is-emphasis" : ""
                                }`}
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
  );
}
