export default function ForgeWhatWeDoSection({
  sectionRef,
  slides,
  slideSpan,
  progress,
  activeIndex,
  label = "What we do"
}) {
  return (
    <section ref={sectionRef} className="what-we-do">
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
            <span>03</span>
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
                  <p>
                    {slide.words.map((word, wordIndex) => {
                      const wordOn = wordIndex < Math.round(local * slide.words.length);

                      return (
                        <span
                          className={`what-we-do__word ${wordOn && isActive ? "is-on" : ""}`}
                          key={`${slide.id}-${wordIndex}`}
                        >
                          {word}
                          {wordIndex < slide.words.length - 1 ? " " : ""}
                        </span>
                      );
                    })}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
