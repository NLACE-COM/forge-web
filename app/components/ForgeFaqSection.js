export default function ForgeFaqSection({ items }) {
  return (
    <section id="faqs" className="faq-section layout-shell">
      <div className="eyebrow">FAQs</div>
      <div className="faq-section__content">
        <h2>Respuestas directas para entender si Forge calza contigo.</h2>
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
