import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeFaqSection({ items }) {
  return (
    <section id="faqs" className="faq-section layout-shell tw:pb-28">
      <ForgeEyebrow>FAQs</ForgeEyebrow>
      <div className="faq-section__content">
        <ForgeRevealHeading text="Respuestas directas para entender si Forge calza contigo." />
        <div className="faq-list tw:mt-11 tw:grid tw:gap-[14px]">
          {items.map((item) => (
            <details className="faq-item d-collapse d-collapse-plus tw:rounded-[18px] tw:bg-[rgba(34,47,48,0.04)]" key={item.question}>
              <summary className="d-collapse-title tw:px-6 tw:py-[22px] tw:text-[clamp(1.14rem,1.3vw,1.4rem)] tw:leading-[1.16] tw:tracking-[-0.04em] tw:text-[var(--dark)]">
                {item.question}
              </summary>
              <div className="d-collapse-content tw:px-6 tw:pb-6">
                <p className="tw:m-0 tw:max-w-[920px] tw:text-[clamp(1rem,1.04vw,1.12rem)] tw:leading-[1.24] tw:tracking-[-0.03em] tw:text-[var(--ink-soft)]">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
