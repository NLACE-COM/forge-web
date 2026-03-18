"use client";

import { useState } from "react";
import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeAccordionList({ eyebrow, title, intro, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="forge-accordion layout-shell tw:pt-24">
      <ForgeEyebrow>{eyebrow}</ForgeEyebrow>
      <div className="forge-accordion__content tw:flex tw:flex-col tw:gap-8">
        {title ? <ForgeRevealHeading text={title} /> : null}
        {intro ? <p className="forge-accordion__intro tw:m-0 tw:max-w-[56ch] tw:text-[1.08rem] tw:leading-[1.4] tw:text-[var(--ink-soft)]">{intro}</p> : null}
        <div className="forge-accordion__items tw:grid tw:gap-4">
          {items.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <button
                type="button"
                className={`forge-accordion__item tw:rounded-[24px] tw:border tw:border-[rgba(17,17,17,0.08)] tw:bg-white tw:px-6 tw:py-5 tw:text-left ${isOpen ? "is-open" : ""}`}
                key={item.title}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="forge-accordion__row tw:grid tw:grid-cols-[72px_minmax(0,1fr)_40px] tw:items-start tw:gap-4 max-[640px]:tw:grid-cols-[1fr_40px]">
                  <div className="forge-accordion__index tw:font-[var(--family--2)] tw:text-[0.88rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(34,47,48,0.48)] max-[640px]:tw:hidden">{item.index ?? `${index + 1}`.padStart(2, "0")}.</div>
                  <div className="forge-accordion__title tw:text-[1.32rem] tw:leading-[1.08] tw:tracking-[-0.04em]">{item.title}</div>
                  <div className="forge-accordion__plus tw:justify-self-end tw:text-2xl tw:leading-none tw:text-[var(--lime)]" aria-hidden="true">
                    +
                  </div>
                </div>
                <div className="forge-accordion__panel tw:overflow-hidden" style={{ maxHeight: isOpen ? "240px" : "0px", transition: "max-height 320ms ease" }}>
                  <p className="tw:mt-4 tw:m-0 tw:max-w-[60ch] tw:text-[1rem] tw:leading-[1.5] tw:text-[var(--ink-soft)]">{item.body}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
