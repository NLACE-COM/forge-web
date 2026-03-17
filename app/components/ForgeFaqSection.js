import ForgeEyebrow from "./ForgeEyebrow";
import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeFaqSection({ items }) {
  return (
    <section id="faqs" className="faq-section layout-shell">
      <ForgeEyebrow>FAQs</ForgeEyebrow>
      <div className="faq-section__content">
        <ForgeRevealHeading text="Respuestas directas para entender si Forge calza contigo." />
        <div className="faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
