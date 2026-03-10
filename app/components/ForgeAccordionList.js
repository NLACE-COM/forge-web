"use client";

import { useState } from "react";

export default function ForgeAccordionList({ eyebrow, title, intro, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="forge-accordion layout-shell">
      <div className="eyebrow">{eyebrow}</div>
      <div className="forge-accordion__content">
        {title ? <h2>{title}</h2> : null}
        {intro ? <p className="forge-accordion__intro">{intro}</p> : null}
        <div className="forge-accordion__items">
          {items.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <button
                type="button"
                className={`forge-accordion__item ${isOpen ? "is-open" : ""}`}
                key={item.title}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="forge-accordion__row">
                  <div className="forge-accordion__index">{item.index ?? `${index + 1}`.padStart(2, "0")}.</div>
                  <div className="forge-accordion__title">{item.title}</div>
                  <div className="forge-accordion__plus" aria-hidden="true">
                    +
                  </div>
                </div>
                <div className="forge-accordion__panel">
                  <p>{item.body}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
