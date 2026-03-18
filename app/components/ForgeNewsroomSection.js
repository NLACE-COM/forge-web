import ForgeButton from "./ForgeButton";
import ForgeRevealHeading from "./ForgeRevealHeading";

const newsroomToneClasses = {
  light:
    "tw:bg-[#f6f6f3] tw:text-[var(--dark)] [&_.newsroom-meta-date]:tw:text-[rgba(34,47,48,0.52)] [&_.newsroom-foot-label]:tw:text-[rgba(34,47,48,0.72)]",
  teal:
    "tw:bg-[#587878] tw:text-[#f3f2ec] [&_.newsroom-badge]:tw:border-[rgba(243,242,236,0.2)] [&_.newsroom-badge]:tw:bg-[rgba(34,47,48,0.26)] [&_.newsroom-badge]:tw:text-[#f3f2ec] [&_.newsroom-meta-date]:tw:text-[rgba(243,242,236,0.72)] [&_.newsroom-foot-label]:tw:text-[rgba(243,242,236,0.72)] [&_.newsroom-arrow]:tw:border-[rgba(243,242,236,0.28)] [&_.newsroom-arrow]:tw:text-[#f3f2ec]",
  dark:
    "tw:bg-[#1c2a2d] tw:text-[#f3f2ec] [&_.newsroom-badge]:tw:border-[rgba(243,242,236,0.2)] [&_.newsroom-badge]:tw:bg-[rgba(34,47,48,0.26)] [&_.newsroom-badge]:tw:text-[#f3f2ec] [&_.newsroom-meta-date]:tw:text-[rgba(243,242,236,0.72)] [&_.newsroom-foot-label]:tw:text-[rgba(243,242,236,0.72)] [&_.newsroom-arrow]:tw:border-[rgba(243,242,236,0.28)] [&_.newsroom-arrow]:tw:text-[#f3f2ec]"
};

export default function ForgeNewsroomSection({ featured, cards }) {
  return (
    <section
      id="newsroom"
      className="tw:relative tw:z-[3] tw:-mb-[120px] tw:w-full tw:pt-24 max-[980px]:tw:-mb-[76px]"
    >
      <div className="tw:rounded-[34px] tw:bg-[#e9e8e5] tw:px-6 tw:pb-[126px] tw:pt-28 max-[980px]:tw:px-[18px] max-[980px]:tw:pb-[84px] max-[980px]:tw:pt-[82px]">
        <div className="tw:flex tw:items-end tw:justify-between tw:gap-5 max-[980px]:tw:flex-col max-[980px]:tw:items-start">
          <ForgeRevealHeading text="Newsroom" />
          <ForgeButton href="#footer" label="View all articles" />
        </div>

        <a
          className="tw:group tw:mt-8 tw:grid tw:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] tw:overflow-hidden tw:rounded-[32px] tw:bg-white tw:no-underline tw:shadow-[0_18px_60px_rgba(17,17,17,0.08)] max-[980px]:tw:grid-cols-1"
          href={featured.href ?? "#"}
          aria-label={featured.title}
          target={featured.target ?? "_self"}
          rel={featured.target === "_blank" ? "noreferrer" : undefined}
        >
          <aside className="tw:relative tw:min-h-[340px] tw:overflow-hidden max-[980px]:tw:min-h-[260px]">
            <img
              className="tw:absolute tw:inset-0 tw:h-full tw:w-full tw:object-cover tw:transition-transform tw:duration-500 group-hover:tw:scale-[1.05] group-focus-visible:tw:scale-[1.05]"
              src={featured.image}
              alt=""
              aria-hidden="true"
            />
          </aside>
          <aside className="tw:relative tw:p-8 max-[980px]:tw:p-6">
            <div className="tw:flex tw:h-full tw:flex-col tw:gap-8">
              <div className="tw:flex tw:items-center tw:justify-between tw:gap-4">
                <div className="newsroom-badge d-badge d-badge-outline">{featured.category}</div>
                <time className="newsroom-meta-date tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(34,47,48,0.48)]">
                  {featured.date}
                </time>
              </div>
              <hgroup className="tw:flex tw:flex-1 tw:flex-col tw:gap-5">
                <h3 className="tw:m-0 tw:text-[clamp(1.6rem,2.7vw,2.7rem)] tw:leading-[1.02] tw:tracking-[-0.05em]">
                  <span className="tw:bg-[length:0%_2px] tw:bg-[linear-gradient(currentColor,currentColor)] tw:bg-left-bottom tw:bg-no-repeat tw:transition-[background-size] tw:duration-300 tw:ease-[var(--transition-ease--1)] group-hover:tw:bg-[length:100%_2px] group-focus-visible:tw:bg-[length:100%_2px]">
                    {featured.title}
                  </span>
                </h3>
                <div className="tw:max-w-[34ch] tw:text-[1rem] tw:leading-[1.45] tw:text-[rgba(34,47,48,0.78)]">
                  {featured.copy}
                </div>
              </hgroup>
              <div className="tw:flex tw:items-center tw:justify-between tw:gap-4">
                <div className="newsroom-foot-label tw:font-[var(--family--2)] tw:text-[0.82rem] tw:uppercase tw:tracking-[0.04em]">
                  Read article
                </div>
                <span
                  className="newsroom-arrow d-btn d-btn-circle d-btn-sm d-btn-outline tw:pointer-events-none tw:transition-transform tw:duration-300 group-hover:tw:scale-[0.94] group-focus-visible:tw:scale-[0.94]"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
                    <path fill="currentColor" d="M8.283 2.6h-1.2v6.444L4.274 6.235l-.848.849L7.5 11.158l4.074-4.074-.848-.849-2.443 2.443V2.6Z"/>
                  </svg>
                </span>
              </div>
            </div>
          </aside>
        </a>

        <div className="tw:mt-5 tw:grid tw:grid-cols-3 tw:gap-5 max-[980px]:tw:grid-cols-1">
          {cards.map((item) => (
            <a
              className={`tw:group tw:flex tw:min-h-[322px] tw:flex-col tw:rounded-[28px] tw:p-6 tw:no-underline ${
                newsroomToneClasses[item.tone] ?? newsroomToneClasses.light
              }`}
              key={item.title}
              href={item.href ?? "#"}
              aria-label={item.title}
              target={item.target ?? "_self"}
              rel={item.target === "_blank" ? "noreferrer" : undefined}
            >
              <div className="tw:flex tw:items-center tw:justify-between tw:gap-4">
                <div className="newsroom-badge d-badge d-badge-outline">{item.category}</div>
                <time className="newsroom-meta-date tw:font-[var(--family--2)] tw:text-[0.78rem] tw:uppercase tw:tracking-[0.04em]">
                  {item.date}
                </time>
              </div>
              <h3 className="tw:mt-6 tw:m-0 tw:flex-1 tw:text-[1.45rem] tw:leading-[1.12] tw:tracking-[-0.04em]">
                <span className="tw:bg-[length:0%_1px] tw:bg-[linear-gradient(currentColor,currentColor)] tw:bg-left-bottom tw:bg-no-repeat tw:transition-[background-size] tw:duration-300 tw:ease-[var(--transition-ease--1)] group-hover:tw:bg-[length:100%_1px] group-focus-visible:tw:bg-[length:100%_1px]">
                  {item.title}
                </span>
              </h3>
              <div className="tw:mt-8 tw:flex tw:items-center tw:justify-between tw:gap-4">
                <div className="newsroom-foot-label tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em]">
                  Read article
                </div>
                <span
                  className="newsroom-arrow d-btn d-btn-circle d-btn-sm d-btn-outline tw:pointer-events-none tw:transition-transform tw:duration-300 group-hover:tw:scale-[0.94] group-focus-visible:tw:scale-[0.94]"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
                    <path fill="currentColor" d="M8.283 2.6h-1.2v6.444L4.274 6.235l-.848.849L7.5 11.158l4.074-4.074-.848-.849-2.443 2.443V2.6Z"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
