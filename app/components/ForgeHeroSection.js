import ForgeButton from "./ForgeButton";

function renderRotatingWords(text, baseIndex, className) {
  let wordIndex = 0;

  return (
    <span className={className}>
      {text.split(/(\s+)/).map((token, i) => {
        if (!token) {
          return null;
        }

        if (/^\s+$/.test(token)) {
          return <span key={`space-${i}`}>{token}</span>;
        }

        const currentWordIndex = wordIndex;
        wordIndex += 1;

        return (
          <span key={`${token}-${i}`} className="hero-word-wrapper hero-word-wrapper--rotate">
            <span
              className="hero-word hero-word--rotate"
              style={{ "--stagger-index": baseIndex, "--word-index": currentWordIndex }}
            >
              {token}
            </span>
          </span>
        );
      })}
    </span>
  );
}

export default function ForgeHeroSection({
  introStage,
  introVisible,
  content,
  problemProgress = 0
}) {
  const trustTrack = [...content.trustItems, ...content.trustItems];
  const posterHidden = introStage === "video" || introStage === "done";
  const mediaProgress = Math.min(Math.max(problemProgress, 0), 1);

  return (
    <>
      <div
        className="hero-stage__media tw:sticky tw:top-[var(--stage-top)] tw:mx-[var(--stage-gutter)] tw:h-[calc(100vh-(var(--stage-top)*2))] tw:w-[calc(100%-(var(--stage-gutter)*2))] tw:overflow-hidden tw:rounded-[var(--stage-radius)] tw:bg-transparent tw:shadow-[var(--shadow-soft)] tw:transition-[height,transform,border-radius] tw:duration-500 tw:ease-[var(--transition-ease--1)] max-[980px]:tw:m-0 max-[980px]:tw:h-[100svh] max-[980px]:tw:w-full max-[980px]:tw:rounded-none"
        style={{
          "--problem-progress": mediaProgress
        }}
      >
        <div className="tw:absolute tw:inset-0">
          <img
            className={`tw:absolute tw:inset-0 tw:block tw:h-full tw:w-full tw:object-cover tw:[object-position:42%_50%] tw:[transform:scaleX(-1)] hero-poster hero-poster--base ${posterHidden ? "is-hidden" : ""}`}
            src="/media/hero-footer-poster.webp"
            alt=""
            aria-hidden="true"
          />
          <video
            className="hero-video is-visible tw:absolute tw:inset-0 tw:block tw:h-full tw:w-full tw:object-cover tw:[object-position:42%_50%] tw:[transform:scaleX(-1)]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/media/hero-footer-poster.webp"
            aria-hidden="true"
          >
            <source src="/media/hero-loop.mp4?v=2" type="video/mp4" />
          </video>
        </div>
      </div>

      {introVisible ? (
        <div className={`intro-overlay intro-overlay--${introStage}`}>
          <div className="intro-frame" aria-hidden="true" />
        </div>
      ) : null}

      <section
        id="hero"
        className="tw:pointer-events-none tw:absolute tw:left-0 tw:top-[var(--stage-top)] tw:z-10 tw:min-h-screen tw:w-full tw:bg-transparent tw:[isolation:isolate] max-[980px]:tw:min-h-[100svh]"
      >
        <div className="layout-shell tw:pointer-events-auto tw:relative tw:z-[3] tw:flex tw:min-h-screen tw:pt-[max(146px,min(calc(146px+(186-146)*((100vw-440px)/(1440-440))),186px))] tw:pb-[max(32px,min(calc(32px+0.012*(100vw-440px)),44px))] max-[980px]:tw:min-h-[100svh] max-[980px]:tw:pb-11 max-[980px]:tw:pt-[168px]">
          <div className="tw:flex tw:min-h-[calc(100vh-max(146px,min(calc(146px+(186-146)*((100vw-440px)/(1440-440))),186px))-max(32px,min(calc(32px+0.012*(100vw-440px)),44px)))] tw:w-full tw:flex-col tw:justify-between tw:gap-y-[100px] tw:text-[#f3f2ec] max-[980px]:tw:min-h-[calc(100svh-212px)]">
            <div className="tw:mt-[144px] tw:max-w-[980px] tw:drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] max-[980px]:tw:mt-[148px] max-[980px]:tw:max-w-full max-[640px]:tw:mt-[150px]">
              <div className="hero-stagger" style={{ "--stagger-index": 0 }}>
                <div className="tw:inline-flex tw:mb-[26px] tw:rounded-[12px] tw:bg-[rgba(247,247,245,0.12)] tw:px-[14px] tw:py-[10px] tw:font-[var(--family--2)] tw:text-[0.82rem] tw:uppercase tw:tracking-[0.03em] tw:text-[rgba(243,242,236,0.9)] tw:backdrop-blur-[10px]">
                  {renderRotatingWords(content.eyebrow, 0, "hero-text-rotate")}
                </div>
              </div>
              <h1 className="hero-heading-rotate tw:m-0 tw:text-[max(3.1rem,min(calc(3.1rem+0.055*(100vw-27.5rem)),6.55rem))] tw:font-normal tw:leading-none tw:tracking-[-0.035em] tw:[text-wrap:pretty] max-[980px]:tw:text-[clamp(3.6rem,11.5vw,5.4rem)] max-[640px]:tw:text-[clamp(3rem,15vw,4.6rem)]">
                {renderRotatingWords(content.title, 1, "hero-text-rotate hero-text-rotate--headline")}
              </h1>
            </div>
            <div className="tw:flex tw:w-full tw:items-end tw:justify-between tw:gap-x-[var(--gap)] tw:gap-y-6 tw:pb-[clamp(56px,7vw,96px)] max-[980px]:tw:flex-col max-[980px]:tw:items-start max-[980px]:tw:gap-7 max-[980px]:tw:pb-8">
              <div className="tw:flex tw:w-auto tw:flex-col tw:gap-6 tw:drop-shadow-[0_2px_14px_rgba(0,0,0,0.35)] max-[980px]:tw:w-full">
                <p className="tw:m-0 tw:max-w-[710px] tw:text-[max(1.42rem,min(calc(1.42rem+0.007*(100vw-27.5rem)),2rem))] tw:leading-[1.14] tw:tracking-[-0.03em] tw:text-[rgba(243,242,236,0.82)] tw:[text-wrap:pretty] max-[640px]:tw:text-[1.28rem] max-[640px]:tw:leading-[1.18]">
                  {renderRotatingWords(content.body, 2, "hero-text-rotate")}
                </p>
                <div className="tw:font-[var(--family--2)] tw:text-[1rem] tw:uppercase tw:tracking-[0.03em] tw:text-[rgba(243,242,236,0.72)] max-[640px]:tw:text-[0.95rem] max-[640px]:tw:leading-[1.45]">
                  {renderRotatingWords(content.microcopy, 3, "hero-text-rotate")}
                </div>
                <div
                  className="hero-stagger tw:flex tw:w-[min(100%,980px)] tw:flex-col tw:gap-0 max-[640px]:tw:w-full"
                  style={{ "--stagger-index": 4 }}
                >
                  <div
                    className="tw:relative tw:w-full tw:overflow-hidden tw:[-webkit-mask-image:linear-gradient(to_right,transparent_0,#000_8%,#000_92%,transparent_100%)] tw:[mask-image:linear-gradient(to_right,transparent_0,#000_8%,#000_92%,transparent_100%)]"
                    aria-label={content.trustLabel}
                  >
                    <div className="hero-trust__logos tw:flex tw:w-max tw:items-center tw:gap-5 tw:py-[6px] max-[640px]:tw:gap-[14px]">
                      {trustTrack.map((item, index) => (
                        <span
                          className="tw:inline-flex tw:min-h-[76px] tw:min-w-[184px] tw:flex-none tw:items-center tw:justify-center tw:rounded-[18px] tw:border tw:border-[rgba(247,247,245,0.22)] tw:bg-[rgba(247,247,245,0.08)] tw:px-7 tw:backdrop-blur-[12px] max-[640px]:tw:min-h-[68px] max-[640px]:tw:min-w-[160px] max-[640px]:tw:px-[22px]"
                          key={`${item.src}-${index}`}
                        >
                          <img
                            className="tw:block tw:h-auto tw:w-auto tw:max-h-[42px] tw:max-w-[144px] tw:object-contain tw:object-center tw:opacity-95 tw:[filter:grayscale(1)_brightness(0)_invert(1)] max-[640px]:tw:max-h-[38px] max-[640px]:tw:max-w-[130px]"
                            src={item.src}
                            alt={item.alt}
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hero-stagger tw:pointer-events-auto tw:ml-auto tw:inline-flex tw:items-center tw:gap-2 tw:pb-1 max-[980px]:tw:ml-0 max-[980px]:tw:w-full"
                style={{ "--stagger-index": 3 }}
              >
                <ForgeButton href={content.cta.href} label={content.cta.label} variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
